import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Payments() {
  const [activeTab, setActiveTab] = useState('ecocash')
  const [formData, setFormData] = useState({ name: '', town: '', phone: '', email: '', reference: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleConfirm = (method) => {
    if (!formData.name || !formData.phone || !formData.reference) {
      alert('Please fill Name, Phone, and Reference 🤍')
      return
    }
    const message = `Fortune Brownies Payment Proof%0A%0AName: ${formData.name}%0ATown: ${formData.town}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AReference: ${formData.reference}%0AMethod: ${method}%0AAmount: M250%0A%0AI have sent M250. Please activate my Fort Knox access.`
    window.open(`https://wa.me/26657031600?text=${message}`, '_blank')
  }

  const PaymentForm = ({ method, accountInfo }) => (
    <div style={{ backgroundColor: '#0a0a0a', border: '2px solid #D4AF37', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem' }}>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#D4AF37' }}>{method} Payment</h3>
      <input type="text" name="name" placeholder="Insert your name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '12px', marginBottom: '0.8rem', backgroundColor: '#000000', border: '1px solid #D4AF37', color: '#D4AF37', borderRadius: '8px', fontSize: '1rem' }} required />
      <input type="text" name="town" placeholder="Insert your town" value={formData.town} onChange={handleChange} style={{ width: '100%', padding: '12px', marginBottom: '0.8rem', backgroundColor: '#000000', border: '1px solid #D4AF37', color: '#D4AF37', borderRadius: '8px', fontSize: '1rem' }} />
      <input type="tel" name="phone" placeholder="Insert number" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '12px', marginBottom: '0.8rem', backgroundColor: '#000000', border: '1px solid #D4AF37', color: '#D4AF37', borderRadius: '8px', fontSize: '1rem' }} required />
      <input type="email" name="email" placeholder="Insert email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '12px', marginBottom: '0.8rem', backgroundColor: '#000000', border: '1px solid #D4AF37', color: '#D4AF37', borderRadius: '8px', fontSize: '1rem' }} />
      <input type="text" name="reference" placeholder="Reference: your number" value={formData.reference} onChange={handleChange} style={{ width: '100%', padding: '12px', marginBottom: '1.2rem', backgroundColor: '#000000', border: '1px solid #D4AF37', color: '#D4AF37', borderRadius: '8px', fontSize: '1rem' }} required />
      <div style={{ backgroundColor: '#000000', border: '1px solid #D4AF37', padding: '1rem', borderRadius: '8px', marginBottom: '1.2rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
        <p style={{ marginBottom: '0.5rem', color: '#D4AF37', fontWeight: 'bold' }}>Join the Fortune Brownies © 2026 Fort Knox Kitchen Hustlers Level 1 @ M250</p>
        <p style={{ marginBottom: '0.5rem', color: '#D4AF37' }}>Save M250. Normal Price M500.</p>
        <p style={{ color: '#D4AF37', fontWeight: 'bold' }}>{accountInfo}</p>
      </div>
      <button onClick={() => handleConfirm(method)} style={{ width: '100%', padding: '16px', backgroundColor: '#00C851', color: '#000000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem' }}>Confirm Payment</button>
      <p style={{ fontSize: '0.85rem', opacity: '0.7', marginTop: '0.8rem', textAlign: 'center', color: '#D4AF37' }}>*Large green button, pressed after sending money to my {method}</p>
    </div>
  )

  return (
    <div style={{ backgroundColor: '#000000', color: '#D4AF37', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.6rem', color: '#D4AF37' }}>Get Access 🧡🍫♾️</h1>
          <button onClick={() => navigate('/')} style={{ backgroundColor: '#D4AF37', color: '#000000', padding: '10px 16px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem' }}>Back</button>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {['ecocash', 'mpesa', 'bank'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: '12px', backgroundColor: activeTab === tab ? '#D4AF37' : '#0a0a0a', color: activeTab === tab ? '#000000' : '#D4AF37', border: `1px solid #D4AF37`, borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem', textTransform: 'capitalize' }}>
              {tab === 'bank' ? 'Post Bank' : tab}
            </button>
          ))}
        </div>
        {activeTab === 'ecocash' && <PaymentForm method="Ecocash" accountInfo="Send to +26662818000" />}
        {activeTab === 'mpesa' && <PaymentForm method="Mpesa" accountInfo="Send to +26657031600" />}
        {activeTab === 'bank' && <PaymentForm method="Lesotho Post Bank" accountInfo="Send to: 1036202900018, MAKHAUHELO MOIMA, BONHOMME, MASERU" />}
      </div>
    </div>
  )
}
