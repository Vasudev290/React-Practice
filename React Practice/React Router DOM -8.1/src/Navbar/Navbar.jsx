import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/home" className='navbar-brand'>React Router DOM</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='navbar-item'><Link to="/home" className='navbar-link'>Home</Link></li>
                    <li className='navbar-item'><Link to="/about" className='navbar-link'>About</Link></li>
                    <li className='navbar-item'><Link to="/contact" className='navbar-link'>Contact</Link></li>
                </ul>
            </div>
       </nav>
    )
  }
}

export default Navbar