import React from "react";
import Employee from "../Employee/emp";
class User extends React.Component {
    users = [
            {id:310, name:"Aravind", Sal: 45000},
            {id:320, name:"Arjun", Sal: 55000}
           ] 
    render() {
        return <div>
            <h2>User Component</h2>
            <hr />
            <Employee user_Data= {this.users}/>
        </div>
    }
}
export default User;