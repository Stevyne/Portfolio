import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";
import SocialLinks from "./SocialLinks";
import { IconSpark } from "./Icons";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden section-pad pt-28 sm:pt-32"
    >
      {/* Ambient glow */}
      <div className="glow-orb animate-pulse-glow left-[-10%] top-[10%] h-[28rem] w-[28rem] bg-[rgba(139,92,246,0.28)]" />
      <div className="glow-orb right-[-8%] bottom-[5%] h-[22rem] w-[22rem] bg-[rgba(217,70,239,0.16)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139,92,246,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="container-narrow relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[rgba(139,92,246,0.08)] px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--color-brand-light)] sm:text-sm">
            <IconSpark className="h-3.5 w-3.5 text-[var(--color-brand-light)]" />
            Disponible pour de nouveaux projets
          </div>

          <p className="animate-fade-up delay-1 mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-base">
            Hello, je suis{" "}
            <span className="text-[var(--color-brand-light)]">
              {profile.shortName}
            </span>
          </p>

          <h1 className="animate-fade-up delay-2 font-display mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Je construis des expériences{" "}
            <span className="gradient-text">web modernes</span>
            <span className="text-white">.</span>
          </h1>

          <p className="animate-fade-up delay-3 mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            <span className="font-medium text-[var(--color-text)]">
              {profile.role}
            </span>{" "}
            — {profile.tagline}
          </p>

          <div className="animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3.5">
            <Link href="#projets" className="btn-primary">
              Voir mon travail
            </Link>
            <Link href="#contact" className="btn-ghost">
              Me contacter
            </Link>
          </div>

          <div className="animate-fade-up delay-5 mt-10 flex flex-wrap items-center gap-5">
            <SocialLinks />
            <div className="hidden h-8 w-px bg-[var(--color-border)] sm:block" />
            <p className="text-sm text-[var(--color-faint)]">
              Python · React · Next.js · Django
            </p>
          </div>
        </div>

        {/* Portrait */}
        <div className="animate-fade-up delay-2 order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35)_0%,transparent_70%)] blur-2xl" />
            <div className="animate-float relative">
              <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#a78bfa] via-[#8b5cf6] to-[#d946ef] opacity-90" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full bg-[var(--color-bg-elevated)] p-1 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/photo-bg.png"
                    alt={`Photo de profil de ${profile.shortName}`}
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-[var(--color-border)] bg-[rgba(13,10,26,0.92)] px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:-left-6 sm:bottom-8 sm:translate-x-0">
                <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  Spécialité
                </p>
                <p className="font-display text-sm font-bold text-white sm:text-base">
                  Full-Stack Engineer
                </p>
              </div>

              <div className="absolute -right-2 top-6 hidden rounded-2xl border border-[var(--color-border)] bg-[rgba(13,10,26,0.92)] px-3.5 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:block lg:-right-8">
                <p className="text-xs text-[var(--color-muted)]">Based in</p>
                <p className="text-sm font-semibold text-white">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
