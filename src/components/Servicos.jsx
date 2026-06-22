import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const servicos = [
  {
    icon: "📷",
    titulo: "Feed",
    descricao: "Planejamento e criação visual do feed",
  },
  {
    icon: "📱",
    titulo: "Stories",
    descricao: "Conteúdos dinâmicos para stories",
  },
  {
    icon: "🎬",
    titulo: "Reels",
    descricao: "Roteiro e edição de reels estratégicos",
  },
  {
    icon: "🎨",
    titulo: "Identidade Visual",
    descricao: "Criação de identidade para redes sociais",
  },
  {
    icon: "⚙️",
    titulo: "Gestão de Perfil",
    descricao: "Gerenciamento completo do seu Instagram",
  },
  {
    icon: "📅",
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
            className="group bg-surface border border-gray-100 rounded-2xl p-8 text-center cursor-default transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-transparent hover:shadow-lg"
          >
            <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
              {s.icon}
            </span>
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
