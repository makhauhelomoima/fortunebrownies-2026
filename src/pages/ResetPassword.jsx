import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleUpdatePassword(e) {
    e.preventDefault()
    const { error } = await supabase.auth.updateUser({
      password: password
    })
    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Password updated ✅ Redirecting to login...')
      setTimeout(() => window.location.href = '/login', 2000)
    }
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="border border-yellow-500 rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-yellow-400 text-center font-bold text-xl mb-4">
          SET NEW PASSWORD
        </h1>
        <form onSubmit={handleUpdatePassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 bg-gray-900 border border-yellow-700 rounded text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold p-2 rounded"
          >
            Update Password
          </button>
        </form>
        {message && <div className="text-center text-sm mt-3 text-yellow-400">{message}</div>}
      </div>
    </div>
  )
}