import { Link } from 'react-router-dom'

function App() {
  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#FFD700',
      minHeight: '100vh',
      padding: '1rem',
      fontFamily: 'Arial'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        padding: '0.5rem 0'
      }}>
        <h3 style={{ fontSize: '1.2rem' }}>Fortune Brownies ©2026</h3>
        <Link to="/login" style={{
          backgroundColor: '#FFD700',
          color: '#000000',
          padding: '10px 20px',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          Login
        </Link>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          lineHeight: '1.1'
        }}>
          We don't sell brownies.<br/>We sell freedom.
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          padding: '0 0.5rem'
        }}>
          Lesotho's first automated micro-franchise for women. One tray at a time.
        </p>

        {/* Main Card */}
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '2px solid #FFD700',
          borderRadius: '16px',
          padding: '1.5rem',
          margin: '0 auto 2rem auto',
          maxWidth: '400px'
        }}>
          <h2 style={{ 
            fontSize: '1.6rem', 
            marginBottom: '1rem',
            color: '#FFD700' 
          }}>
            M250 Founding Member
          </h2>
          <p style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>
            0% monthly fees. Forever.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            M50 per referral. Auto-paid to Ecocash/Mpesa.
          </p>
          <a href="https://wa.me/26657031600" style={{
            display: 'block',
            backgroundColor: '#FFD700',
            color: '#000000',
            padding: '16px',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>
            Join WhatsApp — M250
          </a>
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            Standard price M500 after July 25, 2026
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
          marginBottom: '2rem',
          maxWidth: '400px',
          margin: '0 auto 2rem auto'
        }}>
          {[
            {num: '1', label: 'Founder', sub: 'You tested it 🤍'},
            {num: '3', label: 'Systems', sub: 'Supabase + Vercel + WhatsApp'},
            {num: '150+', label: 'Countries', sub: 'Paystack enabled'}
          ].map((stat, i) => (
            <div key={i} style={{
              backgroundColor: '#1a1a1a',
              padding: '1rem 0.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{stat.label}</div>
              <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '1rem' }}>
          <p style={{ color: '#FFD700', marginBottom: '0.5rem' }}>
            <strong>CEO Direct WhatsApp: +266 570 31600</strong>
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '0.5rem' }}>
            Founded: January 2026 | Dev: April 18, 2026 | Launch: April 25, 2026
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.7' }}>
            © 2026 Fortune Brownies. From Khubetsoana to the world 🧡🍫♾️
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
