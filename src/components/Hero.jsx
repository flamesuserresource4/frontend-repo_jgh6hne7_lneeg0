import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: '70vh' }}>
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-zinc-950/70 dark:via-zinc-950/30 dark:to-zinc-950/80" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(600px 300px at 10% 20%, rgba(99,102,241,0.35), transparent), radial-gradient(600px 300px at 90% 10%, rgba(16,185,129,0.25), transparent)'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center" style={{ minHeight: '70vh' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="px-3 py-1 rounded-full text-xs sm:text-sm bg-white/70 dark:bg-zinc-900/70 border border-white/40 dark:border-zinc-800 shadow-sm"
        >
          Made for dairies in India 🇮🇳
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Manage milk, billing, and farmers with ease.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-black/70 dark:text-white/70"
        >
          DigiDoodh is a modern dairy management platform with offline-first sync, smart rate charts, PDF billing, and multilingual UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#features"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.99] transition"
          >
            Explore Features
          </a>
          <a
            href="#pricing"
            className="px-5 py-3 rounded-xl border border-white/40 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg hover:bg-white/80 dark:hover:bg-zinc-800/80 transition"
          >
            See Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
