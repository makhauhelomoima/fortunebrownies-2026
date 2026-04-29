import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
  'https://lsljnbljovnaclinwxva.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGpuYmxqb3ZuYWNsaW53eHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNjU5NjAsImV4cCI6MjA5MjY0MTk2MH0.tzouGrC6paS91NFkXNSWI8ZWlMX2RPZlR2W3uspdrr4'
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      alert(error.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-[#fbbf24] w-full overflow-x-hidden">
      <div className="w-full px-3 py-4">
        <div className="text-center mb-6 mt-12">
          <h1 className="text-lg font-bold">Fortune Brownies ©2026</h1>
          <h2 className="text-base font-bold">FORT KNOX ACADEMY</h2>
        </div>

        <div className="border-2 border-[#fbbf24] rounded-lg p-4 shadow-[0_0_15px_#fbbf24]">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-[#fbbf24] rounded p-3 mb-3 text-[#fbbf24] placeholder-[#fbbf24]/50 text-sm" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-[#fbbf24] rounded p-3 mb-4 text-[#fbbf24] placeholder-[#fbbf24]/50 text-sm" 
          />
          
          <button 
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#fbbf24] text-black py-3 rounded font-bold mb-2 text-sm disabled:opacity-50"
          >
            Member Access
          </button>
          
          <button 
            onClick={handleLogin}
            disabled={loading}
            className="w-full border-2 border-red-600 text-red-600 py-3 rounded font-bold text-sm disabled:opacity-50"
          >
            CEO Login
          </button>
        </div>

        <div className="text-center text-xs mt-6">
          <p className="font-bold">Fortune Brownies ©2026</p>
          <p className="font-bold">FORT KNOX ACADEMY</p>
          <p className="mt-1 opacity-70">CEO: Makhauhelo Moima</p>
        </div>
      </div>
    </div>
  )
}