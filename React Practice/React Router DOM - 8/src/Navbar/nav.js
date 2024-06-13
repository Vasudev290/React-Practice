import React from'react'
import {Link} from'react-router-dom'
class Navbar extends React.Component {
    render() {
        return<nav className='navbar navbar-secondary bg-dark navbar-expand-lg'>
            <Link to='/home' className='navbar-brand'>React Form Handling</Link>
             <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link to='/home' className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
                    <li className='nav-item'><Link to='/blog' className='nav-link'>Blog</Link></li>
                    <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
                    <li className='nav-item'><Link to='/login' className='nav-link'>Log in</Link></li>
                </ul>
             </div>
            
        </nav>
    }
}
export default Navbar