import Profile from "src/components/Profile";
import Skills from "src/components/Skills";
import Projects from "src/components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <Profile />
        <div className="md:col-span-2 space-y-6">
          <Skills />
          <Projects />
        </div>
      </div>
    </div>
  );
}
