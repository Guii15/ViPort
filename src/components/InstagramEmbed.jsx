import { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";

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
  const [failed, setFailed] = useState(false);

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

    const embedded = () => containerRef.current?.querySelector("iframe");

    // Instagram's oEmbed call occasionally fails silently under load; retry once.
    const retry = setTimeout(() => {
      if (!embedded() && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 2500);

    // Some posts (age-restricted, private, deleted) never embed — fall back to a link.
    const failCheck = setTimeout(() => {
      if (!embedded()) setFailed(true);
    }, 5000);

    return () => {
      clearTimeout(retry);
      clearTimeout(failCheck);
    };
  }, [visible]);

  if (failed) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-surface border border-text/10 rounded-xl text-primary hover:text-secondary transition-colors"
      >
        <FaInstagram className="w-8 h-8" />
        <span className="text-sm font-medium">Ver no Instagram</span>
      </a>
    );
  }

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
