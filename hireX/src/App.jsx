import { useEffect, useState } from 'react'
import LoginPage from './modules/auth/LoginPage'
import SignupPage from './modules/auth/SignupPage'
import LandingPage from './modules/landing/LandingPage'

function getRouteFromHash() {
  const hash = window.location.hash || '#/'
  if (hash.startsWith('#/login')) return 'login'
  if (hash.startsWith('#/signup')) return 'signup'
  return 'landing'
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (route === 'login') return <LoginPage />
  if (route === 'signup') return <SignupPage />
  return <LandingPage />
}

export default App
