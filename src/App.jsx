import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { supabase } from './lib/supabase' // adjust path

function AuthCallback() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Supabase automatically handles the URL params
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/dashboard')
      } else {
        navigate('/login')
      }
    })
  }, [navigate])

  return <div>Logging you in to Fort Knox...</div>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth/callback" element={<AuthCallback />} /> {/* ADD THIS */}
    </Routes>
  )
                                    }
