import { motion } from "framer-motion";
import { FiCamera, FiSmartphone, FiFilm, FiPenTool, FiSettings, FiCalendar } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const servicos = [
  {
    Icon: FiCamera,
    titulo: "Feed",
    descricao: "Planejamento e criação visual do feed",
  },
  {
    Icon: FiSmartphone,
    titulo: "Stories",
    descricao: "Conteúdos dinâmicos para stories",
  },
  {
    Icon: FiFilm,
    titulo: "Reels",
    descricao: "Roteiro e edição de reels estratégicos",
  },
  {
    Icon: FiPenTool,
    titulo: "Identidade Visual",
    descricao: "Criação de identidade para redes sociais",
  },
  {
    Icon: FiSettings,
    titulo: "Gestão de Perfil",
    descricao: "Gerenciamento completo do seu Instagram",
  },
  {
    Icon: FiCalendar,
    titulo: "Planejamento de Conteúdo",
    descricao: "Calendário editorial personalizado",
  },
];

export default function Servicos() {
  return (
    <SectionWrapper id="servicos" className="bg-white">
      <h2 className="font-heading text-4xl font-bold text-center mb-12">
        Meus <span className="text-primary">Serviços</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicos.map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group bg-surface border border-text/10 rounded-2xl p-8 text-center cursor-default transition-colors duration-300 hover:bg-primary hover:border-primary"
          >
            <s.Icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
              {s.titulo}
            </h3>
            <p className="text-text-muted group-hover:text-white/90 transition-colors">
              {s.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
