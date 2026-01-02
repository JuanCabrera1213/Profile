const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git",
];

export default function Skills() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-white shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Habilidades</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
