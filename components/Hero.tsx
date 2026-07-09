import Link from "next/link";
import Image from "next/image";

type ResauSocial = {
  nom: string;
  href: string;
  label: string;
};

const reseaux: ResauSocial[] = [
  { nom: "GitHub",   href: "https://github.com/Stevyne",   label: "GH" },
  { nom: "LinkedIn", href: "https://www.linkedin.com/in/st%C3%A8vyne-ny-aina-samuel-patricino-rabearinjatovo-585636384/", label: "LI" },
  { nom: "Facebook",  href: "https://web.facebook.com/stevyne.rabearinjatovo.5",  label: "FB" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-32 px-16 relative overflow-hidden"
    >

      <div className="absolute top-16 right-1 w-140 h-140 bg-radial from-purple-500/20 to-70% pointer-events-none" />

      <div className="items-center gap-10 mb-30 flex flex-col ">
        <div className="relative w-110 h-110 rounded-full flex items-center justify-center text-3xl"
        style={{
          boxShadow: "0 0 20px var(--purple-glow)",
        }}>
          <Image 
            src="/photo-bg.png" 
            alt="Photo de profil" 
            fill
            className="rounded-full object-cover"
          />
        </div>
        
        <p className="text-3xl text-gray-400">
          Hello I'm <span className="text-purple-500">RABEARINJATOVO Stevyne Ny Aina Samuel Patricino</span> — Web developer.
        </p>
        <div className="flex gap-3 mb-20">
          {reseaux.map((r) => (
            <a
              key={r.nom}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              title={r.nom}
              className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-400 no-underline hover:underline">
              {r.label}
            </a>
          ))}
        </div>
      </div>

      <p className="font-['Syne'] sans-serif text-2xl font-normal text-gray-400 max-w-md leading-snug mb-8">
        I’m a passionate
        <span className="text-purple-500 ml-1">
          Full-Stack Web Developer
        </span>™ 
      </p>

      <h1 className="font-['Syne'] sans-serif text-5xl font-extrabold text-white leading-tight mb-5">
        I'm a{" "}
        <span className="text-purple-500" >
          Software Engineer.
        </span>
      </h1>

      <p className="text-base text-gray-400 max-w-md leading-relaxed mb-4">
        Specializing in Python backend development and React.js frontend engineering. I enjoy building fast, scalable, and user-friendly web applications, turning complex ideas into clean and efficient digital solutions. Always curious, always coding, and constantly improving my craft.
      </p>

      <div className="flex gap-3.5 flex-wrap">
        <Link href="#projects" className="px-7 py-3 bg-purple-500 text-white text-sm font-semibold no-underline shadow-lg rounded-full hover:bg-transparent border border-purple-500 hover:text-gray-400">
          View my work
        </Link>
        <Link href="#contact" className="px-7 py-3 bg-transparent text-gray-400 text-sm font-semibold no-underline border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white" >
          Contact me
        </Link>
      </div>
    </section>
  );
}