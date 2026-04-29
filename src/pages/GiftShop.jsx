import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://lsljnbljovnaclinwxva.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGpuYmxqb3ZuYWNsaW53eHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNjU5NjAsImV4cCI6MjA5MjY0MTk2MH0.tzouGrC6paS91NFkXNSWI8ZWlMX2RPZlR2W3uspdrr4'
)

export default function GiftShop({ profile }) {
  const [locked] = useState(!profile.purchased_giftshop && profile.role!== 'admin')

  const products = [
    {
      id: 1,
      name: 'Red Velvet Money Cake Tutorial',
      price: 'M200',
      desc: 'Full video tutorial + Ingredient list + Costing + Marketing templates',
      pdf: '#',
      video: '#'
    },
    {
      id: 2,
      name: 'Vita Crackers - Weight Gain Recipe',
      price: 'M150',
      desc: 'High-calorie snack recipe. Bulk prep guide. Selling strategy for M5/stick',
      pdf: '#',
      video: '#'
    },
    {
      id: 3,
      name: 'Add-on Brownies - Weight Gain Edition',
      price: 'M180',
      desc: 'Protein-packed brownies. Cost M3, sell M15. Full recipe + macros + labels',
      pdf: '#',
      video: '#'
    }
  ]

  const signOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-black text-[#fbbf24] w-full overflow-x-hidden">
      <div className="w-full px-3 py-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h1 className="text-xs font-bold">Fortune Brownies ©2026 <span className="bg-red-600 text-white px-1 ml-1 text-xs rounded">CEO</span></h1>
            <h2 className="text-xs font-bold">FORT KNOX ACADEMY</h2>
          </div>
          <button onClick={signOut} className="border border-[#fbbf24] px-2 py-1 rounded text-xs">Sign Out</button>
        </div>
        <hr className="border-[#fbbf24] mb-3" />
        <div className="grid grid-cols-4 gap-1 mb-3">
          <button onClick={() => window.location.href='/'} className="border border-[#fbbf24] py-2 rounded text-xs">Home</button>
          <button onClick={() => window.location.href='/academy'} className="border border-[#fbbf24] py-2 rounded text-xs">Academy</button>
          <button className="bg-[#fbbf24] text-black py-2 rounded text-xs font-bold">Gift-Shop</button>
          <button onClick={() => window.location.href=profile.role === 'admin'? '/admin' : '/member'} className="border border-[#fbbf24] py-2 rounded text-xs">
            {profile.role === 'admin'? 'Admin' : 'Dashboard'}
          </button>
        </div>

        {locked? (
          <div className="border-2 border-[#fbbf24] rounded-lg p-4 text-center shadow-[0_0_15px_#fbbf24]">
            <div className="text-4xl mb-2">🔒</div>
            <h3 className="text-lg font-bold mb-2">GIFT SHOP LOCKED</h3>
            <p className="text-xs mb-3">Pay M200.00 to unlock all exclusive recipes</p>
            <button className="w-full bg-[#fbbf24] text-black py-3 rounded font-bold text-sm">Pay M200 - Unlock Now</button>
            <p className="text-xs mt-2 opacity-70">CEO has free access</p>
          </div>
        ) : (
          <div className="space-y-3">
            {products.map((p) => (
              <div key={p.id} className="border-2 border-[#fbbf24] rounded-lg p-3 shadow-[0_0_15px_#fbbf24]">
                <h3 className="text-center text-sm font-bold mb-2">{p.name}</h3>
                <div className="text-center text-2xl font-bold mb-2">{p.price}</div>
                <p className="text-xs mb-3 opacity-90">{p.desc}</p>
                <button className="w-full bg-[#fbbf24] text-black py-2 rounded font-bold text-xs mb-2">Download PDF</button>
                <button className="w-full border border-[#fbbf24] py-2 rounded font-bold text-xs">Watch Tutorial</button>
              </div>
            ))}
          </div>
        )}

        <hr className="border-[#fbbf24] my-3" />
        <div className="text-center text-xs">
          <p className="font-bold">Fortune Brownies ©2026</p>
          <p className="font-bold">FORT KNOX ACADEMY</p>
        </div>
      </div>
    </div>
  )
}