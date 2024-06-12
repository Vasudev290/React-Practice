import React from "react";
class Employee extends React.Component{
    constructor (props) {
         super(props)
         console.log("First constructor will execute");
         this.state = {
            currentTime: new Date().toLocaleTimeString()
         }
    }
    render() {
        console.log("Second constructor will execute");
        return <div>
               <h1>Employee Salary Component</h1>
        </div>
    }
}
export default Employee;