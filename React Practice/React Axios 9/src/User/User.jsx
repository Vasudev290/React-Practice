import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props) {
        super(props)
        console.log("first");
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        console.log("third");
       Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((responese) => {
                this.setState({ users :responese.data})
                //console.log(responese.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        console.log("second");
    return (
      <div>
        <div className="container mt-5">
            <div className="row">
            {/* <pre>{JSON.stringify(this.state.users)}</pre> */}
            {
                this.state.users.length > 0 ? <React.Fragment>
            
            <div className="col-md-10">
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user) => {
                           return <tr key={user.id}> 
                               <td>{user.id}</td>
                               <td>{user.name}</td>
                               <td>{user.username}</td>
                               <td>{user.email}</td>
                               <td>{user.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
            </React.Fragment> : null
            }
            </div>
        </div>
      </div>
    )
  }
}

export default User