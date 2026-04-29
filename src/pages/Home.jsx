import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-[#fbbf24] w-full overflow-x-hidden flex flex-col">
      <div className="w-full px-4 py-6 flex-1 flex flex-col">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Fortune Brownies ©2026</h1>
          <h2 className="text-xl font-bold">FORT KNOX ACADEMY</h2>
          <p className="text-sm mt-2 opacity-80">Turn M250 into Freedom!+</p>
        </div>

        {/* HERO STATS */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-center">
          <div className="border border-[#fbbf24] rounded p-2">
            <p className="text-lg font-bold">M250</p>
            <p className="text-xs opacity-70">Lifetime</p>
          </div>
          <div className="border border-[#fbbf24] rounded p-2">
            <p className="text-lg font-bold">M50</p>
            <p className="text-xs opacity-70">Per Referral</p>
          </div>
          <div className="border border-[#fbbf24] rounded p-2">
            <p className="text-lg font-bold">24/7</p>
            <p className="text-xs opacity-70">Academy</p>
          </div>
        </div>

        {/* MAIN CTA BOX */}
        <div className="border-2 border-[#fbbf24] rounded-lg p-4 mb-4 shadow-[0_0_20px_#fbbf24] bg-black/50">
          <h3 className="text-center text-base font-bold mb-3">Join Fort Knox Today</h3>
          <div className="text-xs space-y-2 mb-4">
            <p>✅ Lifetime membership for M250</p>
            <p>✅ Price increases to M500 on 25th July 2026</p>
            <p>✅ Earn M50 per referral - unlimited</p>
            <p>✅ Access Academy + Leaderboard</p>
            <p>✅ Unlock M200 Gift Shop products</p>
          </div>
          
          {/* TWO BUTTONS - ADMIN VS MEMBER */}
          <div className="space-y-2">
            <button 
              onClick={() => navigate('/login', { state: { role: 'member' } })}
              className="w-full bg-[#fbbf24] text-black py-3 rounded font-bold text-sm active:scale-95"
            >
              Member Access →
            </button>
            <button 
              onClick={() => navigate('/login', { state: { role: 'admin' } })}
              className="w-full border border-[#fbbf24] text-[#fbbf24] py-3 rounded font-bold text-sm active:scale-95"
            >
              Admin Portal →
            </button>
          </div>
        </div>

        {/* SOCIAL PROOF */}
        <div className="border border-[#fbbf24]/50 rounded p-3 mb-4 text-center">
          <p className="text-xs font-bold mb-1">BUILT FOR BASOTHO BY MOSOTHO</p>
          <p className="text-xs opacity-70">Turn flour, sugar & butter into bank alerts</p>
        </div>

        {/* FOOTER */}
        <div className="text-center text-xs opacity-70 mt-auto pt-4">
          <p>CEO: Makhauhelo Moima</p>
          <p>Fortune Brownies ©2026</p>
          <p className="mt-1">Maseru, Lesotho 🇱🇸</p>
        </div>

      </div>
    </div>
  )
}