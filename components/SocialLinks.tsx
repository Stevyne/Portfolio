import { socials } from "@/lib/data";
import { IconFacebook, IconGithub, IconLinkedin } from "./Icons";

const iconMap = {
  GitHub: IconGithub,
  LinkedIn: IconLinkedin,
  Facebook: IconFacebook,
} as const;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

export default function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.name as keyof typeof iconMap] ?? IconGithub;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            aria-label={social.name}
            className={`${box} group relative inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.02)] text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:bg-[rgba(139,92,246,0.12)] hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]`}
          >
            <Icon className={icon} />
          </a>
        );
      })}
    </div>
  );
}
