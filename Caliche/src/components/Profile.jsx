export default function Profile() {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center text-white shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src="/public/img/OIP.jpg"
        alt="Perfil"
        className="w-64 h-84 rounded-full mx-auto mb-4 border-4 border-indigo-500"
      />

      <h1 className="text-2xl font-bold">Juan Carlos Cabreras</h1>
      <p className="text-indigo-300">Reciclador</p>

      <p className="mt-4 text-sm text-gray-300">
        Creo interfaces modernas con React y Tailwind. Me gusta el diseño limpio
        y el código bien estructurado.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <a className="hover:text-indigo-400 transition" href="#">GitHub</a>
        <a className="hover:text-indigo-400 transition" href="#">LinkedIn</a>
        <a className="hover:text-indigo-400 transition" href="#">CV</a>
      </div>
    </div>
  );
}
