import React from "react";
import Navbar from "./Navbar/nav";
import Login from "./form/Login";
import Registration from "./form/Registration";
class App extends React.Component {
    render() {
        return <div>
               <Navbar />
                <Registration />
        </div>
    }
}
export default App; 