type Projet = {
  id: number;
  titre: string;
  description: string;
  tags: string[];
  imageAGauche: boolean;
  github: string;
};

const projets: Projet[] = [
  {
    id: 1,
    titre: "Expense Manager",
    description: "A modern web application designed to help users efficiently track and manage their daily expenses. The application provides an intuitive interface for recording transactions, monitoring spending habits, and organizing financial data in a simple and user-friendly way.",
    tags: ["React", "Django", "Modern UI/UX Design"],
    imageAGauche: false,
    github: "https://github.com/Stevyne/Projet-Expense-Manager",
  },
  {
    id: 2,
    titre: "Game Project",
    description: "A 2D game development project created to provide a gameplay experience. The project includes core gameplay mechanics such as character movement, collision detection, animations, and dynamic environments.",
    tags: ["Python", "Fun"],
    imageAGauche: true,
    github: "https://github.com/Stevyne/Game",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-5">

      <h2 className="text-['Syne'] font-sans text-3xl font-extrabold mb-6">
        Projects
      </h2>

      {projets.map((projet) => (
        <div
          key={projet.id}
          className="flex items-center gap-15 mb-20"
          style={{
            flexDirection: projet.imageAGauche ? "row-reverse" : "row",
          }}
        >
          <div className="flex-1 min-h-70 bg-black-800 rounded-2xl flex items-center justify-center p-8 shadow-[0_0_20px_var(--purple-glow)]">

            <div className="w-full h-full bg-blue-800 rounded-xl border-purple-950 p-4">

              <div className="h-2 bg-purple-950 rounded-sm mb-3" />

              {[100, 60, 80, 50, 90].map((w, i) => (
                <div key={i} className="h-1 w-auto bg-black rounded-sm mb-2" />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm font-extrabold text-purple-700 uppercase mb-3">
              Projet en vedette
            </p>
            <h3 className="text-['Syne'] font-sans text-2xl font-extrabold mb-4">
              {projet.titre}
            </h3>
            <p className="text-sm text-gray-500 mb-5 max-w-100">
              {projet.description}
            </p>

            <div className="flex gap-2 flex-wrap mb-5">
              {projet.tags.map((tag) => (
                <span key={tag} className="px-1 py-3 rounded-full text-sm bg-purple-950 border-purple-950 text-purple-700 hover:bg-purple-800 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>


            <div className="flex gap-4" >
              <a href={projet.github} className="text-sm text-gray-600 hover:text-white" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}