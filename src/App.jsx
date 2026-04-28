import { useState } from 'react'

export default function App() {
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [formData, setFormData] = useState({
    name: '', town: '', phone: '', email: ''
  })

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const openUSSD = (ussd) => {
    // Opens phone dialer with USSD pre-filled
    window.location.href = `tel:${ussd.replace(/\s/g, '')}`
  }

  const confirmPaymentWhatsApp = (method, ussd, account) => {
    const msg = `FORTUNE1 PAYMENT SENT
Name: ${formData.name}
Town: ${formData.town}
Phone: ${formData.phone}
Email: ${formData.email}
Reference: ${formData.phone}
Method: ${method}
USSD Used: ${ussd}
Amount: M250 ≈ $14.40 USD
Sent to: ${account}
Status: MONEY SENT VIA USSD. SEND LEVEL 1 KIT.`
    
    const whatsappNumber = method === 'Ecocash' ? '26662818000' : '26657031600'
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const PaymentForm = ({ method, account, number, ussd, isEFT }) => (
    <div className="border-2 border-yellow-400 rounded-xl p-5 bg-gray-900/50 text-left">
      <h4 className="font-bold text-2xl mb-4 text-center text-yellow-400">{method}</h4>
      
      <div className="space-y-3 mb-4">
        <input name="name" placeholder="Insert your name" onChange={handleInput} 
          className="w-full p-4 rounded bg-black border border-yellow-400/50 text-white text-base" />
        <input name="town" placeholder="Insert your town" onChange={handleInput}
          className="w-full p-4 rounded bg-black border border-yellow-400/50 text-white text-base" />
        <input name="phone" placeholder="Insert number" onChange={handleInput}
          className="w-full p-4 rounded bg-black border border-yellow-400/50 text-white text-base" />
        <input name="email" placeholder="Insert email" onChange={handleInput}
          className="w-full p-4 rounded bg-black border border-yellow-400/50 text-white text-base" />
        <input value={formData.phone} disabled placeholder="Reference: [your number]"
          className="w-full p-4 rounded bg-gray-800 border border-yellow-400/30 text-gray-400 text-base" />
      </div>

      <div className="bg-yellow-400/10 p-4 rounded mb-4 text-sm">
        <p className="font-bold mb-2">Join the Fortune Brownies © 2026 Fort Knox Kitchen Hustlers Level 1 @ M250</p>
        <p className="mb-2">Save M250. Normal Price M500.00 ≈ $28.80 USD</p>
        <p className="font-bold text-yellow-400">Send to: {account}</p>
        {number && <p className="text-yellow-400">Number: {number}</p>}
        <p className="font-bold text-green-400 mt-2">USSD: {ussd}</p>
      </div>

      {!isEFT ? (
        <>
          <button 
            onClick={() => openUSSD(ussd)}
            disabled={!formData.name || !formData.phone}
            className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-xl transition-all mb-3"
          >
            1. Tap to Dial {ussd} & Pay M250
          </button>
          <button 
            onClick={() => confirmPaymentWhatsApp(method, ussd, account)}
            disabled={!formData.name || !formData.phone}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg text-lg transition-all"
          >
            2. I Sent Money - Confirm via WhatsApp
          </button>
          <p className="text-xs text-center mt-2 text-gray-400">
            Step 1 opens your phone dialer. Step 2 notifies Queen.
          </p>
        </>
      ) : (
        <>
          <div className="bg-blue-400/10 p-3 rounded mb-3 text-sm">
            <p className="font-bold mb-1">EFT Details:</p>
            <p>Bank: Lesotho Post Bank</p>
            <p>Account: 1036202900018</p>
            <p>Name: MAKHAUHELO MOIMA</p>
            <p>Branch: BONHOMME, MASERU</p>
            <p>Reference: {formData.phone || '[Your Phone Number]'}</p>
          </div>
          <button 
            onClick={() => confirmPaymentWhatsApp(method, ussd, account)}
            disabled={!formData.name || !formData.phone}
            className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-xl transition-all"
          >
            I Sent EFT - Confirm via WhatsApp
          </button>
          <p className="text-xs text-center mt-2 text-gray-400">
            Use your banking app or dial {ussd} for mobile banking
          </p>
        </>
      )}
    </div>
  )

  return (
    <main className="min-h-screen bg-black text-yellow-400 flex flex-col items-center justify-center p-3 md:p-4 font-sans">
      <div className="w-full max-w-lg mx-auto text-center">
        
        <div className="flex justify-between items-center mb-6 px-2">
          <p className="text-base md:text-lg font-semibold">Fortune Brownies ©2026</p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-bold text-sm md:text-base">
            Login
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight px-2">
          We don't sell brownies.<br/>
          We sell freedom.
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-300 px-4">
          Lesotho's first automated micro-franchise for women. One tray at a time.
        </p>

        {!paymentMethod ? (
          <div className="border-2 border-yellow-400 rounded-xl p-5 md:p-8 mx-2 mb-6 bg-gray-900/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">M250 Founding Member</h3>
            <p className="text-lg md:text-xl mb-2 text-gray-300">≈ $14.40 USD</p>
            <p className="text-base mb-1">0% monthly fees. Forever.</p>
            <p className="text-base mb-6">M50 per referral. Auto-paid to Ecocash/Mpesa.</p>
            
            <h4 className="font-bold text-xl mb-3">Get Access - Choose Payment:</h4>
            <div className="space-y-3">
              <button onClick={() => setPaymentMethod('Ecocash')}
                className="bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-lg w-full hover:bg-yellow-300">
                1. Ecocash - *199#
              </button>
              <button onClick={() => setPaymentMethod('Mpesa')}
                className="bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-lg w-full hover:bg-yellow-300">
                2. Mpesa - *200#
              </button>
              <button onClick={() => setPaymentMethod('PostBank')}
                className="bg-yellow-400 text-black px-6 py-4 rounded-lg font-bold text-lg w-full hover:bg-yellow-300">
                3. Post Bank - *120*223# / EFT
              </button>
            </div>
            
            <p className="text-sm mt-4 text-gray-400">
              Price goes back to M500.00 ≈ $28.80 USD on July 25th
            </p>
          </div>
        ) : (
          <div className="mx-2 mb-6">
            <button onClick={() => setPaymentMethod(null)} className="mb-4 text-base text-gray-400 underline">
              ← Back to payment methods
            </button>
            {paymentMethod === 'Ecocash' && <PaymentForm method="Ecocash" account="+26662818000" number="+26662818000" ussd="*199#" />}
            {paymentMethod === 'Mpesa' && <PaymentForm method="Mpesa" account="+26657031600" number="+26657031600" ussd="*200#" />}
            {paymentMethod === 'PostBank' && <PaymentForm method="Lesotho Post Bank" account="1036202900018, MAKHAUHELO MOIMA" ussd="*120*223#" isEFT={true} />}
          </div>
        )}

        <div className="text-center text-sm text-gray-400 px-4">
          <p className="font-bold text-yellow-400 mb-1 text-base">CEO Direct WhatsApp: +266 570 31600</p>
          <p>Founded: Jan 2026 | Dev: Apr 18 | Launch: Apr 25</p>
          <p className="mt-3">© 2026 Fortune Brownies. From Khubetsoana to the world 🤍🇱🇸</p>
        </div>

      </div>
    </main>
  )
}