import React from'react'

class Navbar extends React.Component {
    render() {
        return<nav className='navbar navbar-secondary bg-dark navbar-expand-lg'>
            <a href='#' className='navbar-brand'>React Life Cycle</a>

            <div className='ml-auto'> 
                <ul className='navbar-nav'>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>Home</a>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>About</a>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>Contact</a>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>login</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}
export default Navbar