import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./Navbar/nav";
import Home from "./Dummy-5/Home";
import About from "./Dummy-5/About";
import Blog from "./Dummy-5/Blog";
import contact from "./Dummy-5/contact";
import login from "./Dummy-5/login";
import Login from "./form/Login";
/* import Registration from "./form/Registration"; */
class App extends React.Component {
    render() {
        return <div>
            <Router>
               <Navbar />
               <Switch>
                <Route  path="/home" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/blog" component={Blog}/>
                <Route  path="/contact" component={contact}/>
                <Route  path="/login" component={login}/>
               </Switch>
            </Router>    
        </div>
    }
}
export default App; 