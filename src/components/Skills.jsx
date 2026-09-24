import Section from "./Section";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I Work With" title="Skills & Tools">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="card">
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-surface/60 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
