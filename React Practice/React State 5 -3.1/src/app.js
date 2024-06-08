import React from "react";
import Navbar from "./Navbar/nav";
import Message from "./Message/Message";
class App extends React.Component {
    render() {
        return <div>
               <Navbar />
                <h2>App Component</h2>
                <Message />
        </div>
    }
}
export default App; 