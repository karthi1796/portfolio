import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've Worked" title="Experience">
      <div className="relative border-l border-slate-800 pl-8">
        {experience.map((job) => (
          <div key={job.company} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 shadow-glow">
              <span className="h-2 w-2 rounded-full bg-base" />
            </span>
            <div className="card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-white">{job.company}</h3>
                <span className="text-sm text-slate-500">{job.location}</span>
              </div>
              <div className="mt-2 space-y-1">
                {job.roles.map((r) => (
                  <div key={r.title} className="flex flex-wrap justify-between gap-2">
                    <span className="font-medium text-accent2">{r.title}</span>
                    <span className="text-sm text-slate-500">{r.period}</span>
                  </div>
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-3 text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
