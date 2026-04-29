import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://lsljnbljovnaclinwxva.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGpuYmxqb3ZuYWNsaW53eHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNjU5NjAsImV4cCI6MjA5MjY0MTk2MH0.tzouGrC6paS91NFkXNSWI8ZWlMX2RPZlR2W3uspdrr4'
)

export default function Admin({ profile }) {
  const [members, setMembers] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [payouts, setPayouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => { fetchData() }, [])

  async function fetchData() {
    try {
      const { data: membersData, error: dbError } = await supabase
       .from('profiles')
       .select('id,email,is_member,created_at,referral_code,referred_by')
       .order('created_at', { ascending: false })

      if (dbError) {
        setError('Database error: ' + dbError.message)
        setLoading(false)
        return
      }

      const safeMembers = membersData || []
      setMembers(safeMembers)
      setTotalRevenue(safeMembers.filter(m => m.is_member).length * 250)

      const payoutMap = {}
      safeMembers.forEach(m => {
        const refCount = safeMembers.filter(x => x.referred_by === m.id).length
        if (refCount > 0) payoutMap[m.email] = refCount * 50
      })
      setPayouts(Object.entries(payoutMap))
      setLoading(false)
    } catch (err) {
      setError('Failed to load: ' + err.message)
      setLoading(false)
    }
  }

  const copyReferralLink = (code) => {
    if (!code) return
    const link = `${window.location.origin}?ref=${code}`
    navigator.clipboard.writeText(link)
    alert(`Link copied:\n${link}`)
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-[#fbbf24] flex items-center justify-center">
        Loading Fort Knox Vault...
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <p className="font-bold mb-2">CEO ALERT</p>
          <p className="text-sm">{error}</p>
          <button onClick={signOut} className="border border-red-500 px-3 py-1 rounded text-xs mt-4">
            Sign Out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-[#fbbf24] w-full overflow-x-hidden">
      <div className="w-full px-3 py-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h1 className="text-xs font-bold">Fortune Brownies ©2026 <span className="bg-red-600 text-white px-1 ml-1 text-xs rounded">CEO</span></h1>
            <h2 className="text-xs font-bold">FORT KNOX ACADEMY</h2>
            <p className="text-xs opacity-70">{profile?.email}</p>
          </div>
          <button onClick={signOut} className="border border-[#fbbf24] px-2 py-1 rounded text-xs">Sign Out</button>
        </div>
        <hr className="border-[#fbbf24] mb-3" />
        <div className="grid grid-cols-4 gap-1 mb-3">
          <button onClick={() => window.location.href='/'} className="border border-[#fbbf24] py-2 rounded text-xs">Home</button>
          <button onClick={() => window.location.href='/academy'} className="border border-[#fbbf24] py-2 rounded text-xs">Academy</button>
          <button onClick={() => window.location.href='/giftshop'} className="border border-[#fbbf24] py-2 rounded text-xs">Gift-Shop</button>
          <button className="bg-[#fbbf24] text-black py-2 rounded text-xs font-bold">Admin</button>
        </div>
        <div className="border-2 border-[#fbbf24] rounded-lg p-3 mb-3 shadow-[0_0_15px_#fbbf24]">
          <div className="text-center">
            <h3 className="text-sm font-bold">💰 REVENUE EMPIRE 💰</h3>
            <div className="text-3xl font-bold mt-1">M{totalRevenue}</div>
            <div className="text-xs">TOTAL REVENUE | {members.length} Members</div>
          </div>
        </div>
        <div className="border-2 border-[#fbbf24] rounded-lg p-3 mb-3">
          <h3 className="text-center text-sm font-bold mb-2">💸 PAYMENT-OUTS DUE 💸</h3>
          {payouts.length === 0? (
            <div className="text-center text-xs py-2">No payouts pending</div>
          ) : (
            payouts.map(([email, amount]) => (
              <div key={email} className="flex justify-between text-xs py-1 border-b border-[#fbbf24]/30">
                <span className="break-all">{email}</span>
                <span className="font-bold">M{amount}</span>
              </div>
            ))
          )}
        </div>
        <div className="border-2 border-[#fbbf24] rounded-lg p-3 mb-4">
          <h3 className="text-center text-sm font-bold mb-2">👥 ALL MEMBERS 👥</h3>
          <div className="grid grid-cols-5 text-xs border-b border-[#fbbf24] pb-1 mb-1 gap-1">
            <div>Email</div><div>M250</div><div>Joined</div><div>Ref Code</div><div>Link</div>
          </div>
          {members.length === 0? (
            <div className="text-center text-xs py-2">No members yet</div>
          ) : (
            members.map((m) => (
              <div key={m.id} className="grid grid-cols-5 text-xs py-1 border-b border-[#fbbf24]/30 gap-1 items-center">
                <div className="break-all">{m.email?.split('@')[0]}</div>
                <div>{m.is_member? '✅' : '❌'}</div>
                <div>{m.created_at? new Date(m.created_at).toLocaleDateString() : 'N/A'}</div>
                <div className="font-bold">{m.referral_code || 'N/A'}</div>
                <button 
                  onClick={() => copyReferralLink(m.referral_code)} 
                  disabled={!m.referral_code} 
                  className="bg-[#fbbf24] text-black px-1 py-0.5 rounded text-[9px] disabled:opacity-30"
                >
                  Copy
                </button>
              </div>
            ))
          )}
        </div>
        <hr className="border-[#fbbf24] mb-3" />
        <div className="text-center text-xs">
          <p className="font-bold">Fortune Brownies ©2026</p>
          <p className="font-bold">FORT KNOX ACADEMY</p>
        </div>
      </div>
    </div>
  )
}