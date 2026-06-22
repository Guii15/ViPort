import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Social Media & Criadora de Conteúdo
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text mt-4 leading-tight">
            Criando conteúdo que{" "}
            <span className="text-primary">conecta</span>
          </h1>
          <p className="text-text-muted text-lg mt-6 leading-relaxed">
            Transformo marcas em presenças digitais memoráveis através de
            estratégia, criatividade e consistência.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#portfolio"
              className="bg-primary text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Ver Portfólio
            </a>
            <a
              href="https://wa.me/5535997024823"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
            <span className="text-white font-heading text-6xl md:text-7xl font-bold">
              VS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
