import { profile } from "@/lib/data";
import SocialLinks from "./SocialLinks";
import { IconArrowUpRight, IconMail } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative section-pad pb-10 sm:pb-14">
      <div className="glow-orb bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 bg-[rgba(139,92,246,0.18)]" />

      <div className="container-narrow relative z-10">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[rgba(22,18,42,0.95)] via-[rgba(13,10,26,0.95)] to-[rgba(6,4,15,0.98)] p-8 shadow-[0_30px_80px_-30px_rgba(139,92,246,0.35)] sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-light)]">
                Contact
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Travaillons ensemble
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                {profile.contactPitch}
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[rgba(139,92,246,0.08)] px-5 py-4 transition hover:border-[var(--color-brand)] hover:bg-[rgba(139,92,246,0.14)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.18)] text-[var(--color-brand-light)]">
                  <IconMail className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-[var(--color-muted)]">
                    Email
                  </span>
                  <span className="block text-sm font-semibold text-white sm:text-base">
                    {profile.email}
                  </span>
                </span>
                <IconArrowUpRight className="ml-2 h-4 w-4 text-[var(--color-muted)] transition group-hover:text-white" />
              </a>

              <div className="mt-8">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--color-faint)]">
                  Réseaux
                </p>
                <SocialLinks />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.22),transparent_60%)]" />
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[rgba(6,4,15,0.55)] p-6 sm:p-8">
                <p className="font-display text-lg font-bold text-white sm:text-xl">
                  Ouvert aux opportunités
                </p>
                <ul className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                    Missions freelance & projets produits
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                    Collaboration full-stack (Python / React)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                    Remote-friendly · {profile.location}
                  </li>
                </ul>

                <a
                  href={`mailto:${profile.email}?subject=Projet%20/%20Collaboration`}
                  className="btn-primary mt-8 w-full"
                >
                  Envoyer un message
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
