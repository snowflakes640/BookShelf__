import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/bookshelf_logo.png"
import { FiAlignRight } from "react-icons/fi"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggle = () => setToggleMenu(!toggleMenu)
  return (
    <nav className='navbar flex flex-sb' id="navbar">
      <div className='navbar-content'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
          <img src = {logo} alt = "site logo" />
          <span className='text-uppercase fw-7 fs-24 ls-1'> BookShelf </span>
          </Link>
          <button type='button' className='navbar-toggler-btn m-1' onClick={handleToggle}>
            <FiAlignRight size={37} style ={ {color: `${toggleMenu ? "#fff" : "#010101"}`} }/>
          </button>
        </div>
      </div>
      <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
        <ul className='navbar-nav m-1'>
          <li className='nav-item m-1'>
            <Link to = "book"  className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
            Home </Link>
          </li>
          <li className='nav-item m-1'>
            <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
            About </Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar