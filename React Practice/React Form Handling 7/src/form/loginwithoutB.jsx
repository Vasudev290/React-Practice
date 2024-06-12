import React, { Component } from 'react'

export class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        console.log("first tab");
       /*  console.log(event)
        console.log(event.target)
        console.log(event.target.value) */
        this.setState({email : event.target.value})
    }
    passwordHandler = (event) => {
        console.log("second tab");
       this.setState({password : event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault()
       console.log(this.state);
    }
  render() {
    return (
      <div>
        <h1>Login Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label>Email</label>
            <input type="text" onChange={this.emailHandler}/>
            <br />
            <label>Password</label>
            <input type="password" onChange={this.passwordHandler}/>
            <br />
            <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default Login