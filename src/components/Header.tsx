export function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-3 px-8 rounded-2xl bg-neutral-800 text-white mb-4">
      <div className="flex flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            className="w-40 h-48 rounded-2xl object-cover block border-2 border-white/10"
            src="avatar.png"
            alt="Stanislav Tsibulskii"
          />
        </div>

        <div>
          <h1>Stanislav Tsibulskii</h1>
          <p className="text-yellow-500 font-medium">Front-End Web Developer</p>
        </div>
      </div>

      <nav className="hidden md:block">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#code">Code</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      </nav>
    </header>
  );
}