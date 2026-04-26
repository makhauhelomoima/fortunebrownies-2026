export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-900">
      <div className="container mx-auto px-4 py-16">
        
        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-amber-900">
            Fortune Brownies ©2026
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-800 font-semibold">
            We don't sell brownies. We sell freedom, one tray at a time.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-xl border border-amber-200">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">
              Automated Micro-Franchise for Women
            </h2>
            <p className="text-lg mb-6">
              M250 Founding Member. 0% monthly fees. M50 per referral. 
              Cash out via Ecocash/Mpesa.
            </p>
            <a 
              href="https://wa.me/26657031600?text=FORT%20KNOX" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl text-xl inline-block transition-all shadow-lg"
            >
              Join WhatsApp → M250
            </a>
          </div>
        </section>

        {/* PROOF */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-4xl font-black text-amber-700">0</div>
            <div className="text-amber-900 font-semibold">Employees</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-4xl font-black text-amber-700">3</div>
            <div className="text-amber-900 font-semibold">Automated Systems</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-4xl font-black text-amber-700">150+</div>
            <div className="text-amber-900 font-semibold">Countries Reached</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-amber-800">
          <p className="font-semibold">CEO Direct: +266 570 31600</p>
          <p className="text-sm mt-2">Built with: Supabase + Vercel + Automated Rewards Engine</p>
          <p className="text-xs mt-4">© 2026 Fortune Brownies. From Khubetsoana to the world 🇱🇸</p>
        </footer>

      </div>
    </main>
  )
              }
