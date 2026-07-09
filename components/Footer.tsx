import Link from "next/link";
import { navLinks, profile } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] section-pad !py-10">
      <div className="container-narrow flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">
            {profile.firstName}
            <span className="text-[var(--color-brand-light)]">.</span>
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks size="sm" />
      </div>

      <div className="container-narrow mt-8 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-faint)] sm:text-left">
        © {year} {profile.shortName}. Tous droits réservés.
      </div>
    </footer>
  );
}
