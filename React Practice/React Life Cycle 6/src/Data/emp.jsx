import React from "react";
import Employees from "./data";
class employee extends React.Component {
    constructor(props) {
        super(props)
        console.log("fisrt");
    }
    render() {
        console.log("Second");
        return (
            <div>
                {/* <pre>{JSON.stringify(Employees)}</pre> */}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Fisrt Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Employees.map((Employee) => {
                                            return <tr key={Employee.id}>
                                                <td>{Employee.id}</td>
                                                <td>{Employee.first_name}</td>
                                                <td>{Employee.last_name}</td>
                                                <td>{Employee.email}</td>
                                                <td>{Employee.gender}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default employee;