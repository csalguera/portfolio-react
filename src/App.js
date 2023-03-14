// npm packages
import { useRef, useState } from 'react'

// page components
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'

// components
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

// styles
import './App.css'

function App() {
  const landingRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const [url, setUrl] = useState(null)

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl)
    window.history.pushState(null, null, newUrl)
  }

  const scrollToRef = (ref, newUrl) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleUrlChange(newUrl)
  }

  return (
    <>
      <Nav
        landingRef={landingRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
        handleUrlChange={handleUrlChange}
      />
      <Landing
        landingRef={landingRef}
      />
      <Projects
        projectsRef={projectsRef}
      />
      <About
        aboutRef={aboutRef}
      />
      <Contact
        contactRef={contactRef}
      />
      <Footer />
    </>
  )
}

export default App
