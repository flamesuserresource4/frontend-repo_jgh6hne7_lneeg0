import { useState } from 'react';
import { Menu, Home, Settings, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border-b border-white/20 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg bg-white/60 dark:bg-zinc-800/60 border border-white/30 dark:border-zinc-700 hover:bg-white/80 dark:hover:bg-zinc-700 transition"
          >
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 shadow-[0_0_30px_rgba(99,102,241,0.35)]" />
            <span className="font-semibold text-lg tracking-tight">DigiDoodh</span>
          </a>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100 transition">
            <Home className="w-4 h-4" /> Home
          </a>
          <a href="#features" className="opacity-90 hover:opacity-100 transition">Features</a>
          <a href="#pricing" className="opacity-90 hover:opacity-100 transition">Pricing</a>
          <a href="#contact" className="opacity-90 hover:opacity-100 transition">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-white/60 dark:bg-zinc-800/60 border border-white/30 dark:border-zinc-700 hover:bg-white/80 dark:hover:bg-zinc-700 transition">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-white/30 dark:border-zinc-700 bg-white/60 dark:bg-zinc-800/60 hover:bg-white/80 dark:hover:bg-zinc-700 transition">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="h-9 w-9 rounded-full border border-white/30 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 flex items-center justify-center">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/30 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-zinc-800/60">Home</a>
            <a href="#features" className="block px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-zinc-800/60">Features</a>
            <a href="#pricing" className="block px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-zinc-800/60">Pricing</a>
            <a href="#contact" className="block px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-zinc-800/60">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
