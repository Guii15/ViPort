import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function Counter({ end, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-5xl md:text-6xl font-bold text-white">
        +{count}
        {suffix}
      </span>
      <p className="text-white/80 mt-2 text-lg">{label}</p>
    </div>
  );
}

const stats = [
  { end: 15, suffix: "", label: "Clientes Atendidos" },
  { end: 200, suffix: "", label: "Posts Criados" },
];

export default function Resultados() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [years, setYears] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += 0.05;
      if (start >= 3) {
        setYears(3);
        clearInterval(timer);
      } else {
        setYears(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section
      id="resultados"
      className="py-20 px-6 bg-gradient-to-r from-primary to-secondary"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="font-heading text-4xl font-bold text-center text-white mb-14">
          Números que provam
        </h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-10">
          {stats.map((s) => (
            <Counter key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
          ))}
          <div className="text-center">
            <span className="text-5xl md:text-6xl font-bold text-white">
              {years} anos
            </span>
            <p className="text-white/80 mt-2 text-lg">de Experiência</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
