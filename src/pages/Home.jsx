import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen bg-black text-[#fbbf24] w-full overflow-x-hidden">
      <div className="w-full px-3 py-4">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold">Fortune Brownies ©2026</h1>
          <h2 className="text-lg font-bold">FORT KNOX ACADEMY</h2>
          <p className="text-xs mt-2 opacity-80">Turn M250 into Freedom!+</p>
        </div>

        <div className="border-2 border-[#fbbf24] rounded-lg p-4 mb-4 shadow-[0_0_15px_#fbbf24]">
          <h3 className="text-center text-sm font-bold mb-3">Join Fort Knox Today</h3>
          <div className="text-xs space-y-2 mb-4">
            <p>✅ Lifetime membership for M250. Price to go back to M500 on 25th July 2026</p>
            <p>✅ Earn M50 per referral</p>
            <p>✅ Access Academy + Leaderboard</p>
            <p>✅ Unlock M200 Gift Shop products</p>
          </div>
          <button 
            onClick={() => navigate('/login')}
            className="w-full bg-[#fbbf24] text-black py-3 rounded font-bold text-sm"
          >
            Member Access
          </button>
        </div>

        <div className="text-center text-xs opacity-70">
          <p>CEO: Makhauhelo Moima</p>
          <p>Fortune Brownies ©2026</p>
        </div>
      </div>
    </div>
  )
}