import React from "react";
import Navbar from "./Navbar/nav";
import Message from "./Message/Message";
import Employees from "./Data/emp";
class App extends React.Component {
    render() {
        return <div>
               <Navbar />
                <Employees />
        </div>
    }
}
export default App; 