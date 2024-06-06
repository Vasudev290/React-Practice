import React from "react";
class Employee extends React.Component {


    render() {
        return<>
           <h3>Employee Component</h3>
           <pre>{JSON.stringify(this.props)}</pre>
           <h3>Employee Id: {this.props.user_Data[0].id}</h3>
           <h3>Employee Id: {this.props.user_Data[1].id}</h3>
           <h3>Employee Name: {this.props.user_Data[0].name}</h3>
           <h3>Employee Name: {this.props.user_Data[1].name}</h3>
           <h3>Employee Salary: {this.props.user_Data[0].Sal}</h3>
           <h3>Employee Salary: {this.props.user_Data[1].Sal}</h3>
        </>
    }
}
export default Employee;