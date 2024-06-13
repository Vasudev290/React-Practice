import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        console.log("first - email");
        this.setState({email: event.target.value})
    }
    passwordHandler = (event) => {
        console.log("Second - password");
        this.setState({password: event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.state))
    }
  render() {
    return (
      <div>
        <div className="container mt-4">
        <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                            <input type="email" className='form-control' placeholder='Email' onChange={this.emailHandler}/>
                            </div>
                            <div className="form-group">
                            <input type="password" className='form-control' placeholder='Password' onChange={this.passwordHandler}/>
                            </div>
                            <div className="form-group">
                            <input type="submit" className='btn btn-primary' placeholder='Password'/>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login