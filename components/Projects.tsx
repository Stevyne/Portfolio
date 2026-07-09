import { projects } from "@/lib/data";
import { IconExternal, IconGithub } from "./Icons";

function ProjectMockup({ title, accent }: { title: string; accent: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 shadow-[0_0_40px_rgba(139,92,246,0.12)] sm:p-5`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
      />
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[rgba(6,4,15,0.85)] shadow-inner">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-2 py-1 text-[10px] text-[var(--color-faint)]">
            github.com/Stevyne · {title}
          </div>
        </div>

        {/* Abstract UI preview */}
        <div className="grid gap-3 p-4 sm:grid-cols-[0.85fr_1.15fr] sm:p-5">
          <div className="space-y-2.5">
            <div className="h-3 w-2/3 rounded bg-[rgba(139,92,246,0.45)]" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="h-2 w-4/6 rounded bg-white/10" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-lg bg-gradient-to-br from-[rgba(139,92,246,0.35)] to-transparent" />
              <div className="h-14 rounded-lg bg-white/5" />
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="h-2.5 w-24 rounded bg-white/15" />
              <div className="h-6 w-16 rounded-full bg-[rgba(139,92,246,0.3)]" />
            </div>
            {[100, 72, 88, 55, 94].map((w, i) => (
              <div key={i} className="space-y-1.5 rounded-lg bg-white/[0.03] p-2.5">
                <div
                  className="h-2 rounded bg-white/10"
                  style={{ width: `${w}%` }}
                />
                <div className="h-1.5 w-1/2 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="relative section-pad">
      <div className="glow-orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-[rgba(139,92,246,0.12)]" />

      <div className="container-narrow relative z-10">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-light)]">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Projets en vedette
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Une sélection de réalisations qui illustrent mon approche :
            interfaces soignées, backends robustes, et une attention constante
            à l&apos;expérience utilisateur.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project, index) => {
            const reverse = project.imageOnLeft;
            return (
              <article
                key={project.id}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={reverse ? "lg:order-2" : "lg:order-1"}>
                  <ProjectMockup title={project.title} accent={project.accent} />
                </div>

                <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand-light)]">
                    Projet 0{index + 1}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-[var(--color-muted)] sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-[var(--color-border)] bg-[rgba(139,92,246,0.08)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-brand-light)] sm:text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost !px-5 !py-2.5"
                    >
                      <IconGithub className="h-4 w-4" />
                      Code source
                      <IconExternal className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
