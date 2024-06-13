import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Dummy-6/Home'
import About from './Dummy-6/About'
import Cont from './Dummy-6/Cont'
import User from './User/User'
export class app extends Component {
  render() {
    return (
      <div>
        <Router>
         <Navbar />
         <Routes>
            <Route path="/user" element={<User />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Cont/>}/>
         </Routes>
        </Router>
      </div>
    )
  }
}

export default app