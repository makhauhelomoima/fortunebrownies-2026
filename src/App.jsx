import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [session, setSession] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [memberData, setMemberData] = useState(null)
  const [giftShop, setGiftShop] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setIsAdmin(session?.user?.email === 'makhauhelomoima@gmail.com')
      if (session) fetchMemberData(session.user.email)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setIsAdmin(session?.user?.email === 'makhauhelomoima@gmail.com')
      if (session) fetchMemberData(session.user.email)
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchMemberData = async (email) => {
    const { data: member } = await supabase.from('founding_members').select('*').eq('email', email).single()
    setMemberData(member)
    
    const { data: items } = await supabase.from('gift_shop').select('*').eq('active', true)
    setGiftShop(items || [])
  }

  const handleLogin = async () => {
    const email = prompt('Enter your email for magic link')
    if (email) {
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) alert('Error: ' + error.message)
      else alert('Check your email for the magic link!')
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  const copyReferralLink = () => {
    const link = `https://fortunebrownies.vercel.app?ref=${memberData?.referral_code}`
    navigator.clipboard.writeText(link)
    alert('Referral link copied! Share and earn M50 per signup 🍫')
  }

  if (loading) {
    return <div style={{ background: '#000', color: '#FFD700', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>Loading Fort Knox... 🖤💛</h1></div>
  }

  return (
    <div style={{ background: '#000', color: '#FFD700', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      {!session ? (
        // PUBLIC VIEW
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Fortune Brownies 🍫</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>M250 Founding Member Program</p>
          <button onClick={handleLogin} style={{ background: '#FFD700', color: '#000', border: 'none', padding: '15px 30px', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>Login / Join</button>
        </div>
      ) : isAdmin ? (
        // HQ DASHBOARD
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #FFD700', paddingBottom: '20px', marginBottom: '30px' }}>
            <h1>Fort Knox HQ 👑</h1>
            <button onClick={handleLogout} style={{ background: '#FFD700', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
          </div>
          <h2>Welcome, CEO Makhauhelo</h2>
          <p>Your referral code: <strong>{memberData?.referral_code}</strong></p>
          <p>Total referrals: <strong>{memberData?.referral_count || 0}</strong> | Earnings: <strong>M{memberData?.referral_earnings || 0}</strong></p>
        </div>
      ) : (
        // MEMBER DASHBOARD
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #FFD700', paddingBottom: '20px', marginBottom: '30px' }}>
            <h1>Fortune Brownies 🍫</h1>
            <button onClick={handleLogout} style={{ background: '#FFD700', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
          </div>
          
          <h2>Founding Member Portal</h2>
          <p>Logged in as: {session.user.email}</p>
          
          {/* FORT KNOX ACADEMY */}
          <div style={{ background: '#111', padding: '20px', borderRadius: '8px', marginTop: '20px', border: '1px solid #FFD700' }}>
            <h3>🎓 Fort Knox Academy</h3>
            {memberData?.paid ? (
              <>
                <p style={{ color: '#4ADE80', marginBottom: '15px' }}>Status: Paid Member ♾️</p>
                <a href="https://YOUR-PROJECT.supabase.co/storage/v1/object/public/fort-knox-files/academy-founding-recipe.pdf" target="_blank" style={{ background: '#FFD700', color: '#000', padding: '12px 24px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '8px', display: 'inline-block' }}>Download Founding Recipe PDF 🍫</a>
              </>
            ) : (
              <>
                <p style={{ color: '#FF6B6B', marginBottom: '15px' }}>Status: Payment Pending</p>
                <p>Complete M250 via Ecocash to 5072 1444 to unlock</p>
              </>
            )}
          </div>

          {/* REFERRAL ENGINE */}
          <div style={{ background: '#111', padding: '20px', borderRadius: '8px', marginTop: '20px', border: '1px solid #FFD700' }}>
            <h3>💰 Referral Earnings</h3>
            <p>Your Code: <strong>{memberData?.referral_code || 'Loading...'}</strong></p>
            <p>Referrals: <strong>{memberData?.referral_count || 0}</strong> | Earned: <strong>M{memberData?.referral_earnings || 0}</strong></p>
            <button onClick={copyReferralLink} style={{ background: '#FFD700', color: '#000', border: 'none', padding: '10px 20px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>Copy Referral Link</button>
          </div>

          {/* GIFT SHOP */}
          <div style={{ background: '#111', padding: '20px', borderRadius: '8px', marginTop: '20px', border: '1px solid #FFD700' }}>
            <h3>🛍️ Gift Shop</h3>
            {giftShop.map(item => (
              <div key={item.id} style={{ borderTop: '1px solid #333', paddingTop: '15px', marginTop: '15px' }}>
                <p><strong>{item.item_name}</strong> - M{item.price_maluti}</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.description}</p>
                <button onClick={() => alert(`To purchase ${item.item_name}: Pay M${item.price_maluti} via Ecocash to 5072 1444. WhatsApp proof to +266 5178 8890`)} style={{ background: '#FFD700', color: '#000', border: 'none', padding: '8px 16px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', marginTop: '8px' }}>Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App