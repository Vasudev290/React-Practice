import React, { Component } from 'react'

class Registration extends Component {
    state = {
        user: "",
        mobile: "",
        email: "",
        password: "",
        termsconditions: false
    }
    updateformHandler = (event) => {
        this.setState({  [event.target.name] : event.target.value
       })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
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
                                    <input type="text" className='form-control' placeholder='User' name='user' onChange={this.updateformHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="number" className='form-control' placeholder='Mobile' name='number' onChange={this.updateformHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className='form-control' placeholder='Email' name='email' onChange={this.updateformHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className='form-control' placeholder='Password' name='password' onChange={this.updateformHandler}/>
                                </div>
                                <div>
                                    <input type="checkbox" /> Teams & conditions
                                </div>
                                <div className="form-group">
                                    <input type="submit" className='btn btn-success' />
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

export default Registration