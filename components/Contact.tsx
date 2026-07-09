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

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-5 relative overflow-hidden"
    >
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-75 h-75 bg-radial from-purple-500/20 to-70% pointer-events-none rounded-full" />
      <div className="max-w-145 relative z-10">
        <h2 className="text-['Syne'] font-sans text-3xl font-extrabold mb-6">
          Contact
        </h2>

        <p className="text-sm text-gray-400 leading-relaxed mb-7">
          I'm currently looking to join a{" "}
          <span className="text-purple-500">cross-functional</span>{" "}
          team that values improving people's lives through accessible design.
          Have a project in mind? Let's talk!
        </p>

        <a
          href="mailto:rabearinjatovostevyne@gmail.com"
          className="text-lg font-medium text-purple-500 no-underline hover:underline mb-8 inline-block"
        >
          rabearinjatovostevyne@gmail.com ↗
        </a>

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
    </section>
  );
}