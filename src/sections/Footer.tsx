export const Footer = () => {
  return (
    <footer className="border-t border-pink-400/20 bg-gradient-to-r
     from-slate-950 via-slate-900 to-slate-950 py-6 text-center">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-4 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></div>
        </div>

        <p className="text-gray-300 font-medium">
          © 2026 Angel Osayimwense Igbuwe
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Built with React • TypeScript • Tailwind CSS
        </p>

        <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-pink-500 to-cyan-400"></div>
      </div>
    </footer>
  );
};