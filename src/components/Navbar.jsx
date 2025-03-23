import { Link } from 'react-router-dom'
import './Navbar.css'
import reactLogo from '../assets/react.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={reactLogo} className='logo react' alt='React logo' />
        <span className='navbar-title'>Tic Tac Toe</span>
      </div>
      <div className='navbar-links'>
        <Link to='/' className='nav-link'>
          Juego
        </Link>
        <Link to='/about' className='nav-link'>
          Sobre Mí
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
