import React from "react";
class Message extends React.Component{
    Message: "Hello";

    gmHandler = () => {
        console.log("Test case 123")
        this.Message = "Hello, Good Morning"
        console.log(this.Message);
        this.forceUpdate()
    }
    gaHandler = () => {
        this.Message ="Hello, Good after Noon sir it's time to lunch"
        console.log(this.Message)
        this.forceUpdate()
    }
    gnHandler = () => {
         this.Message ="Hello, Good Night Machaa..!"
         console.log(this.Message);
         this.forceUpdate()
    }
    render() {
        return <div>
           <h1>Message Component</h1>
           <h3>Message:{this.Message}</h3>
           <button onClick={this.gmHandler}>GM</button>
           <button onClick={this.gaHandler}className="ml-2">GA</button>
           <button onClick={this.gnHandler}className="ml-2">GN</button>
        </div>
    }
}
export default Message