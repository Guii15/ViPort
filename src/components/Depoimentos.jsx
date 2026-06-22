import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const depoimentos = [
  {
    nome: "Cliente 1",
    texto:
      "A Vitorya transformou completamente a presença digital da minha marca. Resultados incríveis!",
  },
  {
    nome: "Cliente 2",
    texto:
      "Profissional dedicada e criativa. Meu engajamento triplicou em poucos meses.",
  },
  {
    nome: "Cliente 3",
    texto:
      "Recomendo de olhos fechados! Conteúdo de qualidade e estratégia impecável.",
  },
];

export default function Depoimentos() {
  return (
    <SectionWrapper id="depoimentos" className="bg-white">
      <h2 className="font-heading text-4xl font-bold text-center mb-12">
        O que dizem <span className="text-primary">sobre mim</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {depoimentos.map((d, i) => (
          <motion.div
            key={d.nome}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="bg-background rounded-2xl p-8 shadow-sm"
          >
            <svg
              className="w-8 h-8 text-primary/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-text-muted leading-relaxed mb-6">{d.texto}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                {d.nome.charAt(0)}
              </div>
              <span className="font-semibold text-text">{d.nome}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
