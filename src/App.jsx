export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-900 font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16">
        
        {/* NAV */}
        <nav className="flex justify-between items-center mb-12">
          <div className="text-2xl font-black text-amber-900">Fortune Brownies ©2026</div>
          <a 
            href="#join" 
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            Join M250
          </a>
        </nav>

        {/* HERO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-amber-900 leading-tight">
            We don't sell brownies.<br/>We sell freedom.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-800 font-semibold max-w-3xl mx-auto">
            Lesotho's first automated micro-franchise for women. One tray at a time.
          </p>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl border border-amber-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-900">
              M250 Founding Member
            </h2>
            <p className="text-lg mb-2">0% monthly fees. Forever.</p>
            <p className="text-lg mb-6">M50 per referral. Auto-paid to Ecocash/Mpesa.</p>
            <a 
              href="https://wa.me/26657031600?text=FORT%20KNOX%20M250" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-xl text-xl inline-block transition-all shadow-lg w-full md:w-auto"
            >
              Join WhatsApp → M250
            </a>
            <p className="text-sm mt-4 text-amber-700">Standard price M500 after July 25, 2026</p>
          </div>
        </section>

        {/* PROOF */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-5xl font-black text-amber-700 mb-2">0</div>
            <div className="text-amber-900 font-semibold text-lg">Employees</div>
            <div className="text-sm text-amber-700 mt-1">Fully automated</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-5xl font-black text-amber-700 mb-2">3</div>
            <div className="text-amber-900 font-semibold text-lg">Systems</div>
            <div className="text-sm text-amber-700 mt-1">Supabase + Vercel + WhatsApp</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200">
            <div className="text-5xl font-black text-amber-700 mb-2">150+</div>
            <div className="text-amber-900 font-semibold text-lg">Countries</div>
            <div className="text-sm text-amber-700 mt-1">Paystack enabled</div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="join" className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-xl border border-amber-200">
          <h3 className="text-3xl font-bold text-center mb-8 text-amber-900">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold text-lg mb-2 text-amber-900">Pay M250 Once</h4>
              <p className="text-amber-800">Ecocash/Mpesa to +266 570 31600. Send screenshot.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold text-lg mb-2 text-amber-900">Get Referral Link</h4>
              <p className="text-amber-800">Share on WhatsApp Status. Each signup = M50 to you.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold text-lg mb-2 text-amber-900">Cash Out Monthly</h4>
              <p className="text-amber-800">Automated payouts on 26th. 0% fees. Forever.</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-amber-800">
          <p className="font-semibold text-lg">CEO Direct WhatsApp: +266 570 31600</p>
          <p className="text-sm mt-2">Founded: January 2026 | Dev: April 18, 2026 | Live: July 2026</p>
          <p className="text-xs mt-4">© 2026 Fortune Brownies. From Khubetsoana to the world 🇱🇸</p>
        </footer>

      </div>
    </main>
  )
        }
