// npm modules
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'

// page components
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'

// components
import NavBar from './components/NavBar/NavBar'
// import Footer from './components/Footer/Footer'

// mui components
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, blue, grey, green } from '@mui/material/colors'

// styles
import './App.css'

// fonts
import '@fontsource/roboto'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: green[100]
    },
  },
})

function App() {
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [isDarkPref, setIsDarkPref] = useState(false)

  if (isDarkPref) {
    document.body.className = 'dark'
  }

  const scrollToElement = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })

    if (id !== 'landing') {
      navigate(`${id}`)
    } else {
      navigate('')
    }
  }

  const toggleLightDark = useCallback(() => {
    document.body.classList.toggle('dark')
  }, [])

  const handleToggle = useCallback(() => {
    setChecked((checked) => !checked)
    toggleLightDark()
  }, [setChecked, toggleLightDark])

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
  }, [handleToggle, setIsDarkPref, toggleLightDark])

  let backgroundColor1, backgroundColor2, fontColor

  if (document.body.className === 'dark') {
    // Dark Mode
    document.body.style.background = 'rgb(33, 39, 56)'
    backgroundColor1 = 'rgba(163, 0, 0, 1)'
    backgroundColor2 = 'rgb(33, 39, 56)'
    fontColor = 'rgb(245, 243, 245)'
  } else {
    // Light Mode
    document.body.style.background = 'rgb(245, 243, 245)'
    backgroundColor1 = 'rgba(16, 152, 247, 1)'
    backgroundColor2 = 'rgb(245, 243, 245)'
    fontColor = 'rgb(33, 39, 56)'
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar
          scrollToElement={scrollToElement}
          checked={checked}
          setChecked={setChecked}
          setIsDarkPref={setIsDarkPref}
          handleToggle={handleToggle}
        />
        <Landing
          id={'projects'}
          scrollToElement={scrollToElement}
        />
        <Projects
          fontColor1={fontColor}
          fontColor2={backgroundColor1}
        />
        <About
          fontColor1={fontColor}
          fontColor2={backgroundColor1}
        />
        <Contact
          fontColor1={fontColor}
        />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  )
}

export default App
