import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/'} element={<Landing />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/resume'} element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
