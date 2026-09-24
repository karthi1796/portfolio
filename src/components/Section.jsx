import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-container scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="mb-10 font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}
