import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      note: '/mo',
      perks: [
        '10 farmers',
        'Single rate chart',
        'Today entries only',
        'Ads shown',
        'Basic reports',
      ],
      highlight: false,
    },
    {
      name: 'Premium',
      price: '₹200',
      note: '/mo',
      perks: [
        'Add/Edit old milk (Last 1 Month)',
        'Daily Milk Total, Dairy & Customer summaries',
        'Customer limit (500)',
        'Customer Personal Rate',
        'Multiple Cattle Milk',
        'Product Management',
        'Advance Payment & Loan Management',
        'Dairy Bill & Customer Bill',
        'Custom Billing Cycle',
        'Reports + PDF export',
        'Unlimited Rate Chart updates',
        'Default SNF/CLR setting',
        'Unlimited Rate Charts',
        'Buyer/Seller/Customer specific rate charts',
        'Print receipt & share via PDF/WhatsApp',
      ],
      highlight: true,
    },
    {
      name: 'Premium+',
      price: '₹500',
      note: '/mo',
      perks: [
        'Everything in Premium',
        'Add/Edit old milk (Last 1 Year)',
        'Unlimited customers',
        'Offline-first experience',
        'Auto rate charts with FAT/SNF/CLR',
        'Bluetooth printing support',
        'Advanced reports & exports',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="pricing" className="relative py-16 sm:py-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(600px 300px at 80% 20%, rgba(59,130,246,0.10), transparent)',
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Simple pricing that scales with you</h2>
            <p className="mt-3 text-center text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              Start free and upgrade as you grow. No hidden fees.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-2xl border bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ${
                    p.highlight
                      ? 'border-sky-300/50 dark:border-sky-600/40'
                      : 'border-white/40 dark:border-zinc-800'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span className="text-2xl font-extrabold">
                      {p.price}
                      <span className="text-sm font-medium opacity-70">{p.note}</span>
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70 max-h-72 overflow-auto pr-1">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white hover:opacity-95 transition">
                    Get started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-16 sm:py-20">
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/40 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl p-6">
              <h3 className="text-2xl font-bold">Contact us</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">Have questions? Send a message and we’ll reach out.</p>
              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
                <input className="col-span-1 px-4 py-3 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-white/40 dark:border-zinc-700 focus:outline-none" placeholder="Your name" />
                <input className="col-span-1 px-4 py-3 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-white/40 dark:border-zinc-700 focus:outline-none" placeholder="Email" type="email" />
                <textarea className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-white/40 dark:border-zinc-700 focus:outline-none" rows={4} placeholder="Message" />
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
