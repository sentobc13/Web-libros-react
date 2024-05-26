import { Link } from 'react-router-dom'
import React from 'react'
import './Header.scss';

const Header = () => {
  return (
    <nav className='menu'>
     <Link to='/'>Home</Link>
     <Link to='/form'>Form</Link>
     <Link to='/list'>List</Link>
    </nav>
  )
}

export default Header