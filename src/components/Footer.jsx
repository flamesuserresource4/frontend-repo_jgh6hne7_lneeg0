export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/30 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
            <span className="font-semibold text-lg tracking-tight">DigiDoodh</span>
          </div>
          <p className="mt-3 text-sm text-black/70 dark:text-white/70 max-w-sm">
            Made in India 🇮🇳. A delightful dairy billing and automation platform for modern dairies and farmers.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-black/70 dark:text-white/70">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Docs</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-black/70 dark:text-white/70">
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-black/60 dark:text-white/50">
        © {new Date().getFullYear()} DigiDoodh. All rights reserved.
      </div>
    </footer>
  );
}
