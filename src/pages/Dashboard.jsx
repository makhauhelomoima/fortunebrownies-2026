import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) navigate('/login')
      else setUser(user)
      setLoading(false)
    })
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (loading) return <div style={{ backgroundColor: '#000000', color: '#D4AF37', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Fort Knox...</div>

  return (
    <div style={{ backgroundColor: '#000000', color: '#D4AF37', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.6rem', color: '#D4AF37' }}>Fort Knox HQ 🧡🍫♾️</h1>
          <button onClick={handleLogout} style={{ backgroundColor: '#D4AF37', color: '#000000', padding: '10px 16px', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Logout</button>
        </div>
        <div style={{ backgroundColor: '#0a0a0a', border: '2px solid #D4AF37', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#D4AF37' }}>Welcome Hustler</h2>
          <p style={{ marginBottom: '0.5rem', color: '#D4AF37' }}>Email: {user?.email}</p>
          <p style={{ marginBottom: '1rem', color: '#D4AF37' }}>Status: Founding Member Level 1</p>
          <div style={{ backgroundColor: '#000000', border: '1px solid #D4AF37', padding: '1rem', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.9rem', color: '#D4AF37' }}>Your referral link coming soon. Share Fort Knox. Earn M50 per Hustler.</p>
          </div>
        </div>
      </div>
    </div>
  )
      }
