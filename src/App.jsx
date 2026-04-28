import { useState } from 'react'

export default function App() {
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [formData, setFormData] = useState({
    name: '', town: '', phone: '', email: ''
  })

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const confirmPayment = (method) => {
    const msg = `FORTUNE1 PAYMENT CONFIRMATION
Name: ${formData.name}
Town: ${formData.town}
Phone: ${formData.phone}
Email: ${formData.email}
Reference: ${formData.phone}
Method: ${method}
Amount: M250 ≈ $14.40 USD
Status: MONEY SENT. SEND LEVEL 1 KIT.`
    
    const number = method === 'Ecocash' ? '26662818000' : '26657031600'
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const PaymentForm = ({ method, account, number }) => (
    <div className="border-2 border-yellow-400 rounded-xl p-5 bg-gray-900/50 text-left">
      <h4 className="font-bold text-xl mb-4 text-center text-yellow-400">{method}</h4>
      
      <div className="space-y-3 mb-4">
        <input name="name" placeholder="Insert your name" onChange={handleInput} 
          className="w-full p-3 rounded bg-black border border-yellow-400/50 text-white" />
        <input name="town" placeholder="Insert your town" onChange={handleInput}
          className="w-full p-3 rounded bg-black border border-yellow-400/50 text-white" />
        <input name="phone" placeholder="Insert number" onChange={handleInput}
          className="w-full p-3 rounded bg-black border border-yellow-400/50 text-white" />
        <input name="email" placeholder="Insert email" onChange={handleInput}
          className="w-full p-3 rounded bg-black border border-yellow-400/50 text-white" />
        <input value={formData.phone} disabled placeholder="Reference: [your number]"
          className="w-full p-3 rounded bg-gray-800 border border-yellow-400/30 text-gray-400" />
      </div>

      <div className="bg-yellow-400/10 p-4 rounded mb-4 text-sm">
        <p className="font-bold mb-2">Join the Fortune Brownies © 2026 Fort Knox Kitchen Hustlers Level 1 @ M250</p>
        <p className="mb-2">Save M250. Normal Price M500.00 ≈ $28.80 USD</p>
        <p className="font-bold">Send to: {account}</p>
        {number && <p className="text-yellow-400">Number: {number}</p>}
      </div>

      <button 
        onClick={() => confirmPayment(method)}
        disabled={!formData.name || !formData.phone}
        className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-lg transition-all"
      >
        Confirm Payment
      </button>
      <p className="text-xs text-center mt-2 text-gray-400">
        *Large green button, pressed after sending money to my {method}*
      </p>
    </div>
  )

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

        {!paymentMethod ? (
          <div className="border-2 border-yellow-400 rounded-xl p-5 md:p-8 mx-2 mb-6 bg-gray-900/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">M250 Founding Member</h3>
            <p className="text-lg md:text-xl mb-2 text-gray-300">≈ $14.40 USD</p>
            <p className="text-sm md:text-base mb-1">0% monthly fees. Forever.</p>
            <p className="text-sm md:text-base mb-6">M50 per referral. Auto-paid to Ecocash/Mpesa.</p>
            
            <h4 className="font-bold text-lg mb-3">Get Access - Choose Payment:</h4>
            <div className="space-y-3">
              <button onClick={() => setPaymentMethod('Ecocash')}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-base w-full hover:bg-yellow-300">
                1. Ecocash - M250
              </button>
              <button onClick={() => setPaymentMethod('Mpesa')}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-base w-full hover:bg-yellow-300">
                2. Mpesa - M250
              </button>
              <button onClick={() => setPaymentMethod('PostBank')}
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-base w-full hover:bg-yellow-300">
                3. Lesotho Post Bank - M250
              </button>
            </div>
            
            <p className="text-xs md:text-sm mt-4 text-gray-400">
              Price goes back to M500.00 ≈ $28.80 USD on July 25th
            </p>
          </div>
        ) : (
          <div className="mx-2 mb-6">
            <button onClick={() => setPaymentMethod(null)} className="mb-4 text-sm text-gray-400 underline">
              ← Back to payment methods
            </button>
            {paymentMethod === 'Ecocash' && <PaymentForm method="Ecocash" account="+26662818000" />}
            {paymentMethod === 'Mpesa' && <PaymentForm method="Mpesa" account="+26657031600" />}
            {paymentMethod === 'PostBank' && <PaymentForm method="Lesotho Post Bank" account="1036202900018, MAKHAUHELO MOIMA, BONHOMME, MASERU" />}
          </div>
        )}

        <div className="text-center text-xs md:text-sm text-gray-400 px-4">
          <p className="font-bold text-yellow-400 mb-1">CEO Direct WhatsApp: +266 570 31600</p>
          <p>Founded: Jan 2026 | Dev: Apr 18 | Launch: Apr 25</p>
          <p className="mt-3">© 2026 Fortune Brownies. From Khubetsoana to the world 🤍🇱🇸</p>
        </div>

      </div>
    </main>
  )
}