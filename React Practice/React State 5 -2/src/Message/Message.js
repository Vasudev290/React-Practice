import React from "react";
class Message extends React.Component{
    state = {
        message : "Hello"
    }
    gmHandler = () => {
        console.log("Test Case 123");
        this.setState({message: "Yeloo Good Morning"})
    }
    gaHandler = () => {
        console.log("Test Case 123");
        this.setState({message: "Yeloo Good AfterNoon"})
    }
    gnHandler = () => {
        console.log("Test Case 123");
        this.setState({message: "Yeloo Good Night"})
    }
    render() {
        return<div>
            <h1>Message Component</h1>
            <h2>Message:{this.state.message}</h2>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}className="ml-2">GA</button>
            <button onClick={this.gnHandler}className="ml-2">GN</button>
        </div>
    }
}
export default Message;  