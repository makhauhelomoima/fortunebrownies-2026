import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

// ===== FORT KNOX CONFIG - YOUR LIVE URLS =====
const ACADEMY_PDF_URL = 'https://lsljnbljovnaclinwxva.supabase.co/storage/v1/object/public/fort-knox-files/Academy/Fort_Knox_Academy_Founding_Recipe.pdf.pdf';
const ACADEMY_PRICE = 250;
const VERCEL_URL = 'https://fortune-brownies-2026.vercel.app';
// ============================================

export default function App() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('home')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) checkPayment(session.user.id)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) checkPayment(session.user.id)
      else setIsPaid(false)
    })

    fetchProducts()
    return () => subscription.unsubscribe()
  }, [])

  async function fetchProducts() {
    const { data, error } = await supabase.from('gift_shop').select('*').order('price_maluti', { ascending: true })
    if (error) console.log('Error fetching products:', error)
    else setProducts(data || [])
  }

  async function checkPayment(userId) {
    const { data } = await supabase
      .from('users')
      .select('paid')
      .eq('id', userId)
      .single()
    setIsPaid(data?.paid || false)
  }

  async function signUp() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: { emailRedirectTo: VERCEL_URL }
    })
    if (error) alert(error.message)
    else alert('Check your email to confirm signup, Queen!')
    setLoading(false)
  }

  async function signIn() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    setLoading(false)
  }

  async function signOut() {
    await supabase.auth.signOut()
    setIsPaid(false)
    setView('home')
  }

  async function handleAcademyPayment() {
    if (!user) return alert('Sign in first, Queen')
    setLoading(true)
    
    const { error } = await supabase
      .from('payments')
      .insert([{ 
        user_id: user.id, 
        amount_maluti: ACADEMY_PRICE, 
        product_type: 'academy',
        status: 'completed'
      }])
    
    if (error) {
      alert('Payment error: ' + error.message)
      setLoading(false)
      return
    }

    await supabase.from('users').upsert({ id: user.id, email: user.email, paid: true })
    setIsPaid(true)
    setLoading(false)
    
    window.open(ACADEMY_PDF_URL, '_blank')
    alert('Welcome to Fort Knox Academy! 🖤💛 Download starting...')
  }

  async function buyGiftShopItem(item) {
    if (!user) return alert('Sign in first, Queen')
    setLoading(true)
    
    const { error } = await supabase
      .from('payments')
      .insert([{ 
        user_id: user.id, 
        amount_maluti: item.price_maluti, 
        product_type: 'giftshop', 
        product_id: item.id,
        status: 'completed'
      }])
    
    setLoading(false)
    if (error) return alert('Payment error: ' + error.message)
    
    window.open(item.pdf_url, '_blank')
    alert(`Thank you! ${item.item_name} download starting... 🤍🧡`)
  }

  // ===== BLACK & GOLD STYLES =====
  const styles = {
    app: {
      minHeight: '100vh',
      background: '#000',
      color: '#FFD700',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      borderBottom: '2px solid #FFD700',
      paddingBottom: '20px',
      marginBottom: '30px'
    },
    logo: {
      fontSize: '32px',
      fontWeight: '900',
      letterSpacing: '2px',
      margin: '0 0 10px 0',
      textShadow: '0 0 10px rgba(255,215,0,0.5)'
    },
    tagline: {
      fontSize: '14px',
      color: '#FFA500',
      margin: 0
    },
    card: {
      background: '#111',
      border: '1px solid #FFD700',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '20px',
      boxShadow: '0 0 20px rgba(255,215,0,0.2)'
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '12px',
      background: '#000',
      border: '1px solid #FFD700',
      borderRadius: '8px',
      color: '#FFD700',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '14px',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      border: 'none',
      borderRadius: '8px',
      color: '#000',
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      marginBottom: '10px',
      transition: 'transform 0.1s'
    },
    buttonSecondary: {
      background: '#000',
      border: '1px solid #FFD700',
      color: '#FFD700'
    },
    price: {
      fontSize: '32px',
      fontWeight: '900',
      color: '#FFD700',
      textAlign: 'center',
      margin: '10px 0',
      textShadow: '0 0 10px rgba(255,215,0,0.3)'
    },
    productGrid: {
      display: 'grid',
      gap: '16px'
    },
    nav: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    },
    navBtn: {
      flex: 1,
      padding: '10px',
      background: '#111',
      border: '1px solid #FFD700',
      borderRadius: '8px',
      color: '#FFD700',
      cursor: 'pointer',
      fontWeight: '600'
    },
    navActive: {
      background: '#FFD700',
      color: '#000'
    },
    success: {
      color: '#00FF00',
      textAlign: 'center',
      fontWeight: '700'
    }
  }

  if (!user) {
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <h1 style={styles.logo}>FORT KNOX 🍫</h1>
          <p style={styles.tagline}>Turn Your Kitchen Into a Bank</p>
        </div>
        <div style={styles.card}>
          <h2 style={{textAlign: 'center', marginTop: 0}}>Member Access</h2>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.button} onClick={signIn} disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <button style={{...styles.button, ...styles.buttonSecondary}} onClick={signUp} disabled={loading}>
            Create Account
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <h1 style={styles.logo}>FORT KNOX 🍫</h1>
        <p style={styles.tagline}>Welcome, {user.email}</p>
        <button style={{...styles.button, ...styles.buttonSecondary, marginTop: '10px', padding: '8px'}} onClick={signOut}>
          Sign Out
        </button>
      </div>

      <div style={styles.nav}>
        <button 
          style={{...styles.navBtn, ...(view === 'home' ? styles.navActive : {})}} 
          onClick={() => setView('home')}>
          Home
        </button>
        <button 
          style={{...styles.navBtn, ...(view === 'academy' ? styles.navActive : {})}} 
          onClick={() => setView('academy')}>
          Academy
        </button>
        <button 
          style={{...styles.navBtn, ...(view === 'giftshop' ? styles.navActive : {})}} 
          onClick={() => setView('giftshop')}>
          Gift Shop
        </button>
      </div>

      {view === 'home' && (
        <div style={styles.card}>
          <h2 style={{textAlign: 'center', marginTop: 0}}>Your Empire</h2>
          <p style={{textAlign: 'center', color: '#FFA500', fontSize: '16px'}}>
            {isPaid ? '👑 Academy Member: Full Access Unlocked' : 'Start building your baking bank today'}
          </p>
          <button style={styles.button} onClick={() => setView('academy')}>
            {isPaid ? 'Access Academy' : `Join Academy - M${ACADEMY_PRICE}`}
          </button>
          <button style={{...styles.button, ...styles.buttonSecondary}} onClick={() => setView('giftshop')}>
            Browse Gift Shop
          </button>
        </div>
      )}

      {view === 'academy' && (
        <div style={styles.card}>
          <h2 style={{textAlign: 'center', marginTop: 0}}>Fort Knox Academy</h2>
          <div style={styles.price}>M{ACADEMY_PRICE}</div>
          <p style={{textAlign: 'center', color: '#FFA500', marginBottom: '20px', lineHeight: '1.6'}}>
            Lifetime Access<br/>
            Master Recipe + 6 Signature Flavors<br/>
            Cost M100 → Sell M180 → Profit M80 per tray<br/>
            <strong>Bake 5 trays/week = M1,600/month</strong>
          </p>
          {isPaid ? (
            <>
              <p style={styles.success}>✅ You have access</p>
              <button style={styles.button} onClick={() => window.open(ACADEMY_PDF_URL, '_blank')}>
                Download Founding Recipe PDF
              </button>
            </>
          ) : (
            <button style={styles.button} onClick={handleAcademyPayment} disabled={loading}>
              {loading ? 'Processing...' : `Join Academy - M${ACADEMY_PRICE}`}
            </button>
          )}
        </div>
      )}

      {view === 'giftshop' && (
        <div>
          <h2 style={{textAlign: 'center', color: '#FFD700', marginBottom: '20px'}}>Gift Shop</h2>
          <div style={styles.productGrid}>
            {products.length === 0 ? (
              <div style={styles.card}>
                <p style={{textAlign: 'center', color: '#FFA500'}}>New kits dropping soon... 🤍🧡</p>
              </div>
            ) : (
              products.map(item => (
                <div key={item.id} style={styles.card}>
                  <h3 style={{margin: '0 0 10px 0', fontSize: '20px'}}>{item.item_name}</h3>
                  <div style={{...styles.price, fontSize: '28px'}}>M{item.price_maluti}</div>
                  {item.description && <p style={{color: '#FFA500', fontSize: '14px', lineHeight: '1.5'}}>{item.description}</p>}
                  <button style={styles.button} onClick={() => buyGiftShopItem(item)} disabled={loading}>
                    {loading ? 'Processing...' : `Buy Now - M${item.price_maluti}`}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}