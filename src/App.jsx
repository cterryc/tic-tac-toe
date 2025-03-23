import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={() => <Home />} />
        <Route exact path='/about' Component={() => <AboutMe />} />
      </Routes>
    </main>
  )
}

export default App
