import React, {Component} from 'react'

class Message extends Component {
    message = 'yeloo Good Morning'
    ename = 'Aravind'
    emp = {id:310, name: 'Arjun', Salary:45000}
    render() {
        return (
            <div>
                <h2>Message Component</h2>
                <hr />
                <h3>Message: {this.message}</h3>
                <h4>Employee: {this.ename}</h4>
                <hr />
                <h4> Employee Id: {this.emp.id}, Employee name: {this.emp.name} & Employee: {this.emp.Salary}</h4>
            </div>
        )
    }
}
export default Message