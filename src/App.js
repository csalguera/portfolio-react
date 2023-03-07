import './App.css'
import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import Nav from './components/Nav/Nav'

function App() {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const resumeRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Nav
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
      />
      <Landing />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Resume resumeRef={resumeRef} />
      <Contact contactRef={contactRef} />
    </>
  )
}

export default App
