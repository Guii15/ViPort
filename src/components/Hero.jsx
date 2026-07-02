import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Social Media & Designer Gráfica
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text mt-4 leading-tight">
            Criando conteúdo que{" "}
            <span className="text-primary">conecta</span>
          </h1>
          <p className="text-text-muted text-lg mt-6 leading-relaxed">
            Transformo marcas em presenças digitais memoráveis através de
            estratégia, criatividade e consistência.
          </p>
          <p className="text-text-muted mt-4 leading-relaxed">
            Oi, eu sou a Vitorya — junto estratégia de social media e um olhar
            de designer gráfica pra criar conteúdo que não só parece bonito,
            mas gera resultado de verdade.
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
              className="border-2 border-secondary text-secondary px-7 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="relative h-80 md:h-96 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -14, y: 20 }}
            animate={{ opacity: 1, rotate: -8, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute w-44 h-52 md:w-52 md:h-60 bg-primary rounded-2xl shadow-lg top-2 left-6 md:left-10"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: 10 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute w-40 h-48 md:w-48 md:h-56 border-2 border-text/15 rounded-2xl bottom-0 right-4 md:right-8"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute w-48 h-60 md:w-56 md:h-72 bg-surface border border-text/10 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-1"
          >
            <span className="font-heading text-6xl md:text-7xl font-bold text-primary">
              VS
            </span>
            <span className="text-text-muted text-xs uppercase tracking-widest">
              Vitorya Silva
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 4, y: 10 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute bg-secondary text-background px-4 py-2 rounded-lg shadow-md text-sm font-semibold bottom-4 -left-2 md:left-0"
          >
            3 anos criando conteúdo
          </motion.div>
        </div>
      </div>
    </section>
  );
}
