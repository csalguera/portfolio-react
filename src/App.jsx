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
import { grey, yellow } from '@mui/material/colors'

// styles
import './App.css'

// fonts
import '@fontsource/roboto'

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      contrastText: grey[900],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[100],
      secondary: grey[900],
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
        <Projects />
        <About />
        <Contact />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  )
}

export default App
