import { motion } from 'framer-motion';
import { Rocket, FileText, Languages, Shield, WifiOff, Database } from 'lucide-react';

const features = [
  {
    title: 'Smart Rate Charts',
    desc: 'Auto-calculate amounts with FAT/SNF logic and buyer-specific pricing.',
    icon: Rocket,
  },
  {
    title: 'Billing & PDFs',
    desc: 'Create period bills, apply loans/advances, and export beautiful PDFs.',
    icon: FileText,
  },
  {
    title: 'Multilingual UI',
    desc: 'Switch between English and major Indian languages instantly.',
    icon: Languages,
  },
  {
    title: 'Role-based Access',
    desc: 'Admin, dairy, and farmer roles with secure data boundaries.',
    icon: Shield,
  },
  {
    title: 'Offline-first',
    desc: 'Keep working without internet; auto-sync when back online.',
    icon: WifiOff,
  },
  {
    title: 'Firestore + IndexedDB',
    desc: 'Reliable realtime cloud with local caching for speed.',
    icon: Database,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(600px 300px at 10% 10%, rgba(16,185,129,0.15), transparent), radial-gradient(600px 300px at 90% 90%, rgba(99,102,241,0.15), transparent)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to run your dairy</h2>
          <p className="mt-3 text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            A clean, fast experience that feels native on mobile and desktop.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/30 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-200/0 via-sky-200/0 to-emerald-200/0 group-hover:from-indigo-200/30 group-hover:via-sky-200/20 group-hover:to-emerald-200/30 transition" />
              <div className="relative p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.35)]">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
