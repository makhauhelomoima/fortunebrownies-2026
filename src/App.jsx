export default function App() {
  return (
    <main className="min-h-screen bg-black text-yellow-400 flex flex-col items-center justify-center p-3 md:p-4 font-sans">
      <div className="w-full max-w-lg mx-auto text-center">
        
        <div className="flex justify-between items-center mb-6 px-2">
          <p className="text-xs md:text-sm">Fortune Brownies ©2026</p>
          <button className="bg-yellow-400 text-black px-3 py-1.5 rounded font-bold text-xs md:text-sm">
            Login
          </button>
        </div>

        <h1 className="text-3xl md:text-6xl font-black mb-4 leading-tight px-2">
          We don't sell brownies.<br/>
          We sell freedom.
        </h1>
        
        <p className="text-base md:text-xl mb-8 text-gray-300 px-4">
          Lesotho's first automated micro-franchise for women. One tray at a time.
        </p>

        <div className="border-2 border-yellow-400 rounded-xl p-5 md:p-8 mx-2 mb-6 bg-gray-900/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">M250 Founding Member</h3>
          <p className="text-lg md:text-xl mb-2 text-gray-300">≈ $14.40 USD</p>
          <p className="text-sm md:text-base mb-1">0% monthly fees. Forever.</p>
          <p className="text-sm md:text-base mb-4">M50 per referral. Auto-paid to Ecocash/Mpesa.</p>
          
          <a 
            href="https://wa.me/26657031600?text=I%20want%20FORTUNE1%20M250%20Founding%20Member"
            className="bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg inline-block hover:bg-yellow-300 w-full"
          >
            Join WhatsApp - M250 / $14.40
          </a>
          
          <p className="text-xs md:text-sm mt-4 text-gray-400">
            M250 / $14.40 now. Price goes back to M500.00 / $28.80 on July 25th
          </p>
        </div>

        <div className="text-center text-xs md:text-sm text-gray-400 px-4">
          <p className="font-bold text-yellow-400 mb-1">CEO Direct WhatsApp: +266 570 31600</p>
          <p>Founded: Jan 2026 | Dev: Apr 18 | Launch: Apr 25</p>
          <p className="mt-3">© 2026 Fortune Brownies. From Khubetsoana to the world 🤍🇱🇸</p>
        </div>

      </div>
    </main>
  )
}