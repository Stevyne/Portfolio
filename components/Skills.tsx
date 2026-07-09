type Competence = {
  nom: string;
  niveau: number;
};

type Categorie = {
  titre: string;
  emoji: string;
  competences: Competence[];
};

const categories: Categorie[] = [
  {
    titre: "Frontend",
    emoji: "🖥️",
    competences: [
      { nom: "React / Next.js", niveau: 90 },
      { nom: "TypeScript",      niveau: 80 },
      { nom: "Tailwind CSS",    niveau: 85 },
      { nom: "HTML / CSS",      niveau: 95 },
    ],
  },
  {
    titre: "Backend",
    emoji: "⚙️",
    competences: [
      { nom: "Node.js",  niveau: 75 },
      { nom: "Express",  niveau: 70 },
      { nom: "Python",   niveau: 90 },
      { nom: "REST API", niveau: 80 },
    ],
  },
  {
    titre: "Outils",
    emoji: "🔧",
    competences: [
      { nom: "Git / GitHub", niveau: 90 },
      { nom: "VS Code",      niveau: 95 },
      { nom: "Docker",       niveau: 50 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="px-10 py-5">

      <h2 className="text-['Syne'] font-sans text-3xl font-extrabold mb-6">
        Compétences
      </h2>


      <div className="grid grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.titre}
            className="bg-gray-900 border-purple-900 rounded-3xl p-8"
          >

            <div className="flex items-center gap-3 mb-7">
              <span className="text-2xl" >{cat.emoji}</span>
              <h3 className="text-['Syne'] font-sans text-lg font-extrabold ">
                {cat.titre}
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {cat.competences.map((comp) => (
                <div key={comp.nom}>


                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">{comp.nom}</span>
                    <span className="text-sm text-purple-600 font-semibold">
                      {comp.niveau}%
                    </span>
                  </div>


                  <div className="w-full h-1 bg-gray-950 rounded-sm">

                    <div className="h-1 bg-linear-to-r from-purple-500 to-purple-700 rounded-sm shadow-[0_0_10px_var(--purple-glow)]"
                    style={{
                      width: `${comp.niveau}%`,
                    }} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}