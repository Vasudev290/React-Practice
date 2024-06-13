import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Dummy-6/Home'
import About from './Dummy-6/About'
import contact from './Dummy-6/Cont'
export class app extends Component {
  render() {
    return (
      <div>
        <Router>
         <Navbar />
         <Routes>
            <Route  path='/home' element={Home} />
            <Route  path='/about' element={About} />
            <Route  path='/contact' element={contact} />
         </Routes>
        </Router>
      </div>
    )
  }
}

export default app