import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* glow backdrop */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent2/20 blur-[120px]" />

      <div className="section-container grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-block rounded-full border border-slate-700 px-4 py-1 text-sm text-accent2">
            Quality Assurance Engineer
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.cv} download className="btn-primary">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail /> Contact Me
            </a>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-lg text-slate-300 transition-colors hover:border-accent hover:text-accent"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-lg text-slate-300 transition-colors hover:border-accent hover:text-accent"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent to-accent2 blur-2xl opacity-40" />
            <img
              src={profile.headshot}
              alt={profile.name}
              className="relative h-64 w-64 rounded-3xl border border-slate-700 object-cover shadow-glow sm:h-80 sm:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
