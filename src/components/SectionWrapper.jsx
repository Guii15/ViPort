import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`py-20 px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}
