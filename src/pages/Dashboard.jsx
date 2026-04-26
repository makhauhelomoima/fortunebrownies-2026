import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [referrals, setReferrals] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        window.location.href = '/login'
      } else {
        setUser(user)
        setLoading(false)
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (loading) return (
    <div className="min-h-screen bg-black text-amber-400 flex items-center justify-center text-xl font-bold">
      Loading Fort Knox...
    </div>
  )

  return (
    <main className="min-h-screen bg-black text-amber-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-amber-400">Fort Knox Dashboard</h1>
          <button onClick={handleLogout} className="text-amber-300 hover:text-amber-400 font-semibold">
            Logout
          </button>
        </div>
        
        <div className="bg-zinc-900/80 rounded-xl p-4 mb-6 border border-amber-500/20">
          <p className="text-amber-200/80 text-sm">Welcome back,</p>
          <p className="text-amber-400 font-bold text-lg">{user.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900/80 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-yellow-500">M{referrals * 50}</div>
            <div className="text-amber-200 font-semibold mt-2">Total Earned</div>
            <div className="text-amber-200/60 text-xs mt-1">Auto-paid 26th</div>
          </div>
          <div className="bg-zinc-900/80 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-yellow-500">{referrals}</div>
            <div className="text-amber-200 font-semibold mt-2">Referrals</div>
            <div className="text-amber-200/60 text-xs mt-1">M50 each</div>
          </div>
          <div className="bg-zinc-900/80 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all">
            <div className="text-sm text-amber-200 mb-2 font-semibold">Your Referral Link:</div>
            <div className="text-xs bg-black p-3 rounded break-all border border-amber-500/20">
              fortune-brownies-2026.vercel.app?ref={user.id.slice(0,8)}
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/80 rounded-xl p-6 border border-amber-500/20">
          <h2 className="text-xl font-bold text-amber-400 mb-4">Next Payout: April 26, 2026</h2>
          <p className="text-amber-200/80 mb-4">Share your link on WhatsApp Status. Each M250 signup = M50 to your Ecocash/Mpesa.</p>
          <a 
            href={`https://wa.me/?text=Join Fortune Brownies! We don't sell brownies. We sell freedom 🇱🇸 M250 founding member. 0% fees forever. My link: fortune-brownies-2026.vercel.app?ref=${user.id.slice(0,8)}`}
            target="_blank"
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold py-2 px-6 rounded-lg inline-block"
          >
            Share on WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
      }
