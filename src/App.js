// npm packages
import { useEffect, useRef, useState } from 'react'

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
  const [url, setUrl] = useState('/')

  const handleUrlChange = (newUrl) => {
    window.history.pushState(null, null, newUrl)
  }

  const scrollToRef = (ref, newUrl) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    handleUrlChange(newUrl)
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      console.log(windowHeight);
      const scrollPosition = window.scrollY
      const projectsPosition = (windowHeight * 0.5) * (833 / windowHeight)
      const aboutPosition = (windowHeight * 2.8) * (833 / windowHeight)
      const contactPosition = (windowHeight * 4.5) * (833 / windowHeight)

      if (scrollPosition < projectsPosition) {
        const newUrl = '/'
        setUrl(newUrl)
      } else if (scrollPosition > projectsPosition && scrollPosition < aboutPosition) {
        const newUrl = '/projects'
        setUrl(newUrl)
      } else if (scrollPosition > aboutPosition && scrollPosition < contactPosition) {
        const newUrl = '/about'
        setUrl(newUrl)
      } else if (scrollPosition > contactPosition) {
        const newUrl = '/contact'
        setUrl(newUrl)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Nav
        landingRef={landingRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
        handleUrlChange={handleUrlChange}
        url={url}
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
