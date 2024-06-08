import React from "react";
import { render } from "react-dom";
class Product extends React.Component {
    state = {
        product_Name: "Nothing Phone (2a) 5G",
        img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/g/g/-original-imahfaxfwbz84k6z.jpeg?q=70&crop=false",
        price: 27999,
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
                        <div className="table table-hover">
                            <thead className="bg-primary">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <td>{this.state.product_Name}</td>
                                <td><img src={this.state.img} height="125px"/></td>
                                <td>{this.state.price}</td>
                                <td><i class="fa-solid fa-circle-minus" onClick={this.decHandler}></i>
                                {this.state.qty}
                                <i class="fa-solid fa-circle-plus" onClick={this.incHandler}></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tbody>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    }
}
export default Product;