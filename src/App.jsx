import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [session, setSession] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  // FORT KNOX SESSION + ROLE LISTENER
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setIsAdmin(session?.user?.email === 'makhauhelomoima@gmail.com')
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setIsAdmin(session?.user?.email === 'makhauhelomoima@gmail.com')
    })
  }, [])

  // LOGOUT FUNCTION
  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <div>
      {!session ? (
        <button onClick={() => supabase.auth.signInWithOtp({ email: prompt('Enter email') })}>
          Login
        </button>
      ) : isAdmin ? (
        // HQ DASHBOARD - ONLY YOU SEE THIS
        <div>
          <h1>Fort Knox HQ 👑</h1>
          <p>Welcome, CEO Makhauhelo</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Add member list table here later */}
        </div>
      ) : (
        // MEMBER DASHBOARD - NEW USERS SEE THIS  
        <div>
          <h1>Welcome to Fortune Brownies 🍫</h1>
          <p>Logged in as: {session.user.email}</p>
          <p>Status: Founding Member</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}