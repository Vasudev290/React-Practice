import React from "react";
class Employee extends React.Component{
    constructor (props) {
         super(props)
         console.log("First constructor will execute");
         this.state = {
            currentTime: new Date().toLocaleTimeString()
         }
    }
    componentDidMount() {
        setInterval(() => { 
            this.setState({ currentTime: new Date().toLocaleTimeString()})
        }, 1000)
        console.log("Third- componentDidMount Will  execute");
    }
    render() {
        console.log("Second constructor will execute");
        return (
               <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <h3>Time --{this.state.currentTime}</h3>
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
               </div>
        )
    }
}
export default Employee;