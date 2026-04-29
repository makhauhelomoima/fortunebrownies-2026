import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // MEMBER LOGIN - Email/Password for Thomas
  async function handleEmailLogin(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      setMessage('Invalid login. Check email or reset password.')
    } else {
      window.location.href = '/dashboard'
    }
    setLoading(false)
  }

  // CEO LOGIN - GitHub for you, my Queen
  async function handleGitHubLogin() {
    setLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { 
        redirectTo: 'https://fortune-brownies-2026.vercel.app/dashboard' 
      }
    })
  }

  // PASSWORD RESET - For members who forget
  async function handlePasswordReset() {
    if (!email) {
      setMessage('Enter your email first, then click Reset')
      return
    }
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://fortune-brownies-2026.vercel.app/reset-password',
    })
    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Check your email. Reset link sent ✅')
    }
    setLoading(false)
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="border border-yellow-500 rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-yellow-400 text-center font-bold text-xl mb-1">
          FORTUNE BROWNIES ©2026
        </h1>
        <h2 className="text-yellow-400 text-center font-bold text-lg mb-6">
          FORT KNOX ACADEMY
        </h2>
        
        {/* MEMBER LOGIN FORM */}
        <form onSubmit={handleEmailLogin} className="mb-4">
          <h3 className="text-gray-400 text-sm mb-2 text-center">Member Access</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-3 bg-gray-900 border border-yellow-700 rounded text-white text-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 bg-gray-900 border border-yellow-700 rounded text-white text-sm"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-bold p-2 rounded mb-2 text-sm"
          >
            {loading? 'Loading...' : 'Member Login'}
          </button>
        </form>

        <button
          onClick={handlePasswordReset}
          disabled={loading}
          className="w-full border border-yellow-700 text-yellow-400 p-2 rounded mb-4 text-xs"
        >
          Forgot Password? Reset Here
        </button>

        {/* CEO GITHUB LOGIN */}
        <div className="border-t border-yellow-800 pt-4">
          <h3 className="text-yellow-400 text-sm mb-2 text-center">CEO Dashboard</h3>
          <button
            onClick={handleGitHubLogin}
            disabled={loading}
            className="w-full bg-gray-800 border border-yellow-500 text-yellow-400 font-bold p-2 rounded flex items-center justify-center text-sm"
          >
            <span className="mr-2">🔑</span> Login with GitHub
          </button>
        </div>

        {message && (
          <div className="text-center text-xs mt-3 text-yellow-400">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}