import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { listProducts } from "../../redux/product/product.actions";

import "./Product.css";
import Row from "react-bootstrap/Row";

class Product extends Component {
  constructor(props) {
    super(props);
    // this.state = { goods: Teas };
  }

  render() {
    // let item = this.props.item;
    let addItem = this.props.addItem;
    // Convert data object this.props.listProducts into an array in order for
    // .map to work properly
    let listProducts = this.props.listProducts;
    console.log("in product - listProducts " + JSON.stringify(listProducts));

    return (
      <div className="product-container">
        <Row xs={12} md={4} className="justify-content-center">
            {listProducts ? listProducts.map(item => {
            return (
              <div key={item.name} className="card-product">
                <div className="imgBx">
                  <img
                    className="card-img"
                    src={item.photo}
                    alt="Coffee"
                  ></img>
                </div>
                <div className="card-product-content">
                  <h2 className="card-product-title">{item.name}</h2>

                  <p className="product-desc">Mild Roasted</p>
                  <p className="product-price">Price: ${item.price} </p>
                  <div style={{ marginTop: "50px" }}>
                    {/* <a className="button button-one" href="#">Add to Order</a> */}

                    <button
                      className="button button-one"
                      onClick={() => addItem(item)}
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            );
          }) : <h1>Data not available!</h1>}
        </Row>
      </div>
    );
  }
}
// ToDo: state.product.state.productItems needs to be changed to  state.productItems
const mapStateToProps = state => ({
  listProducts: Object.values(state.product)
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
