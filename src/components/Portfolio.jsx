import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";
import { portfolioItems, instagramHandle } from "../data/portfolio";

const AUTOPLAY_MS = 4000;
const RESUME_AFTER_MS = 6000;
const DESKTOP_QUERY = "(min-width: 768px)";

const portfolioImages = import.meta.glob("../assets/portfolio/*.webp", {
  eager: true,
  import: "default",
});

function resolveImage(localImage) {
  if (!localImage) return undefined;
  return portfolioImages[`../assets/portfolio/${localImage}`];
}

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(() =>
    window.matchMedia(DESKTOP_QUERY).matches ? 3 : 1
  );

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const handler = () => setItemsPerView(mql.matches ? 3 : 1);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return itemsPerView;
}

function PortfolioSlide({ item }) {
  const imageSrc = resolveImage(item.localImage);
  const [failed, setFailed] = useState(false);
  const showFallback = !imageSrc || failed;

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-text/10 bg-surface shadow-sm h-full">
      <div className="aspect-square w-full">
        {showFallback ? (
          <div
            className={`w-full h-full flex items-center justify-center text-white font-semibold text-lg ${
              item.id % 2 === 0 ? "bg-secondary/80" : "bg-primary/80"
            }`}
          >
            {item.caption}
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={item.caption}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <span className="text-text-muted text-sm font-medium">
          @{instagramHandle}
        </span>
        <a
          href={item.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Ver no Instagram
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(0, portfolioItems.length - itemsPerView);

  const [rawIndex, setRawIndex] = useState(0);
  const index = Math.min(rawIndex, maxIndex);
  const [hovering, setHovering] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const interactionTimer = useRef(null);

  useEffect(() => () => clearTimeout(interactionTimer.current), []);

  const pauseForInteraction = useCallback(() => {
    setInteracting(true);
    clearTimeout(interactionTimer.current);
    interactionTimer.current = setTimeout(
      () => setInteracting(false),
      RESUME_AFTER_MS
    );
  }, []);

  const paused = hovering || interacting;

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setRawIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i, maxIndex) + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, maxIndex]);

  const goPrev = () => {
    setRawIndex(index <= 0 ? maxIndex : index - 1);
    pauseForInteraction();
  };

  const goNext = () => {
    setRawIndex(index >= maxIndex ? 0 : index + 1);
    pauseForInteraction();
  };

  const goToPage = (page) => {
    setRawIndex(Math.min(page * itemsPerView, maxIndex));
    pauseForInteraction();
  };

  const totalPages = Math.ceil(portfolioItems.length / itemsPerView);
  const currentPage = Math.round(index / itemsPerView);

  return (
    <SectionWrapper id="portfolio">
      <h2 className="font-heading text-4xl font-bold text-center mb-12">
        Trabalhos que{" "}
        <span className="text-primary">falam por si</span>
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / itemsPerView)}%` }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            {portfolioItems.map((item, i) => (
              <div
                key={item.id}
                className="shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full"
                >
                  <PortfolioSlide item={item} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          aria-label="Próximo"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            aria-label={`Ir para página ${page + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              page === currentPage ? "bg-secondary" : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
