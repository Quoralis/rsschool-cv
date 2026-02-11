export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center py-6 px-8 rounded-2xl bg-neutral-900 text-white/80 mb-8 gap-6 shadow-lg border border-white/5">
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/Quoralis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 transition-colors flex items-center gap-2"
        >
          <img src="icons/github.png" alt="github" className="w-5 h-5 invert opacity-80" />
          <span className="font-medium text-sm">Quoralis</span>
        </a>
      </div>

      <div className="text-sm font-light order-3 md:order-none">
        © {currentYear}
      </div>
      <div className="flex items-center">
        <a
          href="https://rs.school/courses/short-track"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105"
        >
          <img
            src="/icons/rss-logo.svg"
            alt="RS School"
            className="h-8 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}