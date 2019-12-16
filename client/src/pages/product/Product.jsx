import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../../components/custom-button/custom-button.component";

import Coffee1 from "../../assets/images/coffee1.jpg";
import Coffee2 from "../../assets/images/coffee2.jpg";
import Coffee3 from "../../assets/images/coffee3.jpg";
import Coffee4 from "../../assets/images/coffee4.jpg";
import Coffee5 from "../../assets/images/coffee5.jpg";
import Coffee6 from "../../assets/images/coffee6.jpg";
import Coffee7 from "../../assets/images/coffee7.jpg";
import Coffee8 from "../../assets/images/coffee8.jpg";
import "./Product.css";
import Row from "react-bootstrap/Row";

// Note - id must be unique for all products (coffee, tea, desserts, ...)
// or it will cause a problem in our cart.
const Coffees = [
  { id: 1, name: "Coffee 1", photo: Coffee1, price: 2.5 },
  { id: 2, name: "Coffee 2", photo: Coffee2, price: 2.7 },
  { id: 3, name: "Coffee 3", photo: Coffee3, price: 3.1 },
  { id: 4, name: "Coffee 4", photo: Coffee4, price: 3.5 },
  { id: 5, name: "Coffee 5", photo: Coffee5, price: 4.0 },
  { id: 6, name: "Coffee 6", photo: Coffee6, price: 1.5 },
  { id: 7, name: "Coffee 7", photo: Coffee7, price: 2.55 },
  { id: 8, name: "Coffee 8", photo: Coffee8, price: 2.7 }
];

const Product = ( {item, addItem} ) => {
  return (
    <div className="product-container">
      <Row xs={12} md={4} className="justify-content-center">
        {Coffees.map(coffee => {
          return (
            <div key={coffee.name} className="card-product">
              <div className="imgBx">
                <img className="card-img" src={coffee.photo} alt="Coffee"></img>
              </div>
              <div className="card-product-content">
                <h2 className="card-product-title">{coffee.name}</h2>

                <p className="product-desc">Mild Roasted</p>
                <p className="product-price">Price: ${coffee.price} </p>
                <div style={{ marginTop: "50px" }}>
                  {/* <a className="button button-one" href="#">Add to Order</a> */}
                 
                  <button
                    className="button button-one"
                    onClick={() => addItem(coffee)}
                  >
                    Add to Order
                  </button>
                  
                </div>
              </div>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Product);
