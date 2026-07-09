"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { IconClose, IconMenu } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = ["accueil", "projets", "competences", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-[var(--color-border)] bg-[rgba(6,4,15,0.82)] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-narrow flex items-center justify-between px-5 py-3.5 sm:px-8">
          <Link
            href="#accueil"
            onClick={closeMenu}
            className="relative z-50 inline-flex items-center gap-2"
            aria-label="Accueil — Stevyne"
          >
            <Image
              src="/LogoStevy.svg"
              alt="Logo Stevyne"
              width={120}
              height={48}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-muted)] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-[rgba(139,92,246,0.15)] ring-1 ring-[var(--color-border-strong)]" />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-2">
              <Link href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
                Me contacter
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-white transition hover:border-[var(--color-brand)] hover:bg-[rgba(139,92,246,0.12)] md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Fermer le menu"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[var(--color-border)] bg-[rgba(10,8,22,0.98)] px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                className={`transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3.5 text-lg font-medium transition ${
                    active === link.href
                      ? "bg-[rgba(139,92,246,0.14)] text-white"
                      : "text-[var(--color-muted)] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="btn-primary mt-8 w-full"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </>
  );
}
