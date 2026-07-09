import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";


const liens = [
  { label: "Accueil",      href: "#accueil" },
  { label: "Projets",      href: "#projects" },
  { label: "Compétences",  href: "#competences" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-3 bg-transparent backdrop-blur-3xl pl-5 pr-5"   >
      <div className=" flex justify-between">
        <div >

          <Link href="#accueil">
            <Image 
              src="/LogoStevy.svg" 
              alt="Logo" 
              width={100} 
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <div>

          <ul className="flex gap-10 list-none" >
            {liens.map((lien) => (
              <li key={lien.href} className="list-none">
                <Link
                  href={lien.href}
                  className="text-xl text-gray-400 decoration-0 hover:text-purple-800"
                >
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}