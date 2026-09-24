import Section from "./Section";
import { about } from "../data";

export default function About() {
  return (
    <Section id="about" eyebrow="Who I Am" title="About Me">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
        <p className="text-lg leading-relaxed text-slate-400">{about.summary}</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
          {about.stats.map((s) => (
            <div key={s.label} className="card text-center md:text-left">
              <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
