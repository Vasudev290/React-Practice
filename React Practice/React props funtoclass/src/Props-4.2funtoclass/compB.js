// Sending to Function Compnent A to class compnentB

import React from "react";
class compB extends React.Component {
    render() {
        return <>
            <h3>compnent B</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Wish message: {this.props.one}</h2>
            <h4>Employee Name: {this.props.emp_name}</h4>
            <h5>Employee Salary:{this.props.esal}</h5>
        </>
    }
}
export default compB