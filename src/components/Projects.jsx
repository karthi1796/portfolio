import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card flex flex-col"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">{p.name}</h3>
            <p className="mt-3 flex-1 text-slate-400">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-surface/80 px-2 py-1 text-xs text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
