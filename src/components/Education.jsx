import Section from "./Section";
import { education, research } from "../data";
import { FiBookOpen, FiCpu } from "react-icons/fi";

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education & Research">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.school} className="card">
              <div className="flex items-start gap-3">
                <FiBookOpen className="mt-1 shrink-0 text-accent" />
                <div>
                  <h3 className="font-display font-semibold text-white">{e.school}</h3>
                  <p className="text-slate-400">{e.degree}</p>
                  <p className="mt-1 text-sm text-slate-500">{e.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card h-fit">
          <div className="flex items-start gap-3">
            <FiCpu className="mt-1 shrink-0 text-accent2" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent2">Research</p>
              <h3 className="mt-1 font-display font-semibold text-white">{research.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{research.tech}</p>
              <p className="mt-3 text-slate-400">{research.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
