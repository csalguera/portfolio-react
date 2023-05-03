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

// fonts
import '@fontsource/roboto'

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

  let navbarColor, drawerColor, navbarFontColor

  if (document.body.className === 'dark') {
    // Dark Mode

    // NavBar
    document.body.style.background = 'rgb(33, 39, 56)'
    navbarColor = 'rgb(163, 0, 0)'
    drawerColor = 'rgb(33, 39, 56)'
    navbarFontColor = 'rgb(245, 243, 245)'
  } else {
    // Light Mode

    // NavBar
    document.body.style.background = 'rgb(245, 243, 245)'
    navbarColor = 'rgb(16, 152, 247)'
    drawerColor = 'rgb(245, 243, 245)'
    navbarFontColor = 'rgb(33, 39, 56)'
  }

  return (
    <>
      <NavBar
        checked={checked}
        setChecked={setChecked}
        setIsDarkPref={setIsDarkPref}
        handleToggle={handleToggle}
        navbarColor={navbarColor}
        drawerColor={drawerColor}
        navbarFontColor={navbarFontColor}
      />
      <Landing
        fontColor={navbarFontColor}
      />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
