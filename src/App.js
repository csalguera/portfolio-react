import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/resume'} element={<Resume />} />
      </Routes>
      <Projects />
    </>
  )
}

export default App
