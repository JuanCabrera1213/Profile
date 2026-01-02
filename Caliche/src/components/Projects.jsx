const projects = [
  {
    name: "To-Do App",
    desc: "Gestor de tareas con React y localStorage",
  },
  {
    name: "Weather App",
    desc: "Aplicación del clima usando API externa",
  },
  {
    name: "Portfolio",
    desc: "Portafolio personal responsive",
  },
];

export default function Projects() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Proyectos</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map(project => (
          <div
            key={project.name}
            className="bg-black/30 p-4 rounded-xl border border-white/10 hover:border-indigo-500 hover:scale-105 transition-all"
          >
            <h3 className="font-bold text-indigo-400">{project.name}</h3>
            <p className="text-sm text-gray-300 mt-1">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
