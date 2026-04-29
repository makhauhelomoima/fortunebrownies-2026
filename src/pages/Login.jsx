import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else window.location.href = '/dashboard'
    setLoading(false)
  }

  async function handleGitHub() {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: window.location.origin + '/dashboard' }
    })
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="border border-yellow-500 rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-yellow-400 text-center font-bold text-xl mb-1">Fortune Brownies ©2026</h1>
        <h2 className="text-yellow-400 text-center font-bold text-lg mb-6">FORT KNOX ACADEMY</h2>
        
        <button onClick={handleGitHub} className="w-full bg-gray-800 border border-yellow-500 text-white font-bold p-2 rounded mb-3 text-sm hover:bg-gray-700">
          🔑 Login with GitHub
        </button>
        
        <div className="text-center text-gray-500 text-xs mb-3">or</div>
        
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-3 bg-gray-900 border border-yellow-700 rounded text-white text-sm" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-3 bg-gray-900 border border-yellow-700 rounded text-white text-sm" required />
          <button type="submit" disabled={loading} className="w-full bg-yellow-500 text-black font-bold p-2 rounded mb-2 text-sm">
            {loading? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="text-center mt-3 space-y-1">
          <a href="/signup" className="block text-yellow-400 text-xs">New member? Join for M250</a>
          <a href="/reset-password" className="block text-yellow-400 text-xs">Forgot Password?</a>
        </div>
        
        {message && <div className="text-center text-xs mt-3 text-red-400">{message}</div>}
      </div>
    </div>
  )
}