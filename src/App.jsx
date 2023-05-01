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
  return (
    <>
      <NavBar />
      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
