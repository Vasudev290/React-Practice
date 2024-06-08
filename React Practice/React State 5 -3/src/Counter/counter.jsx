import React from "react";
class Counter extends React.Component {
    state= {
        qty: 1
    }
    decHandler = () => {
        this.setState({qty:this.state.qty -1})
    }
    incHandler = () => {
        this.setState({qty:this.state.qty +1})
    }
    render() {
        return <div>
           <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h4>Qty:{this.state.qty}</h4>
                        </div>
                        <div className="card-body">
                        <button className="btn btn-warning" onClick={this.decHandler}>Dec</button>
                        <button className="btn btn-success ml-3" onClick={this.incHandler}>Inc</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    }
}
export default Counter;
