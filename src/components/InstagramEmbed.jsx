import { useEffect, useRef, useState } from "react";

function ensureInstagramScript(onReady) {
  if (window.instgrm) {
    onReady();
    return;
  }
  let script = document.getElementById("instagram-embed-script");
  if (!script) {
    script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }
  script.addEventListener("load", onReady, { once: true });
}

export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    ensureInstagramScript(() => window.instgrm?.Embeds.process());

    // Instagram's oEmbed call occasionally fails silently under load; retry once.
    const retry = setTimeout(() => {
      const notYetEmbedded = containerRef.current?.querySelector("blockquote.instagram-media");
      if (notYetEmbedded && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 2500);

    return () => clearTimeout(retry);
  }, [visible]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center bg-white">
      {visible && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ width: "100%", margin: 0 }}
        />
      )}
    </div>
  );
}
