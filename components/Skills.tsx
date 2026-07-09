import { skillCategories } from "@/lib/data";
import { IconCode, IconServer, IconWrench } from "./Icons";

const iconMap = {
  frontend: IconCode,
  backend: IconServer,
  tools: IconWrench,
} as const;

export default function Skills() {
  return (
    <section id="competences" className="relative section-pad">
      <div className="glow-orb right-[-10%] top-1/3 h-72 w-72 bg-[rgba(217,70,239,0.1)]" />

      <div className="container-narrow relative z-10">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-light)]">
            Expertise
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Compétences
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Un stack moderne orienté performance, maintenabilité et qualité
            d&apos;expérience — du frontend au backend.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <div key={category.title} className="card p-6 sm:p-7">
                <div className="mb-7 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[rgba(139,92,246,0.12)] text-[var(--color-brand-light)]">
                    <Icon />
                  </span>
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                    {category.title}
                  </h3>
                </div>

                <ul className="flex flex-col gap-5">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-sm text-[var(--color-text)]">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold tabular-nums text-[var(--color-brand-light)]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar" aria-hidden>
                        <span style={{ width: `${skill.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tech strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Django",
            "Node.js",
            "Tailwind",
            "Git",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition hover:border-[var(--color-brand)] hover:text-white sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
