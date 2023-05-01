// npm modules
import { useState, useEffect } from 'react'

// page components
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'

// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

// styles
import './App.css'

function App() {
  const [checked, setChecked] = useState(false)
  const [isDarkPref, setIsDarkPref] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const checkDarkPref = () => {
      if (mediaQuery.matches && document.body.className !== 'dark') {
        handleToggle()
      }
    }

    checkDarkPref()

    const handleChange = () => {
      setIsDarkPref(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const toggleLightDark = () => {
    document.body.classList.toggle('dark')
  }

  const handleToggle = () => {
    setChecked(!checked)
    toggleLightDark()
  }

  if (document.body.className === 'dark') {
    document.body.style.background = 'black'
  } else {
    document.body.style.background = 'white'
  }

  return (
    <>
      <NavBar checked={checked} setChecked={setChecked} setIsDarkPref={setIsDarkPref} handleToggle={handleToggle} />
      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
