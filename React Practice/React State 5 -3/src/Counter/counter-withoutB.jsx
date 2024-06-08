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
            <h1>Counter Component</h1>
            <h3>Qty:{this.state.qty}</h3>
            <button onClick={this.decHandler}>-</button>
            <button onClick={this.incHandler}className="ml-2">+</button>
        </div>
    }
}
export default Counter;
