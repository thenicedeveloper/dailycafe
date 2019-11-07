import React from "react";
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

const Coffees = [
  { name: "Coffee 1", photo: Coffee1 },
  { name: "Coffee 2", photo: Coffee2 },
  { name: "Coffee 3", photo: Coffee3 },
  { name: "Coffee 4", photo: Coffee4 },
  { name: "Coffee 5", photo: Coffee5 },
  { name: "Coffee 6", photo: Coffee6 },
  { name: "Coffee 7", photo: Coffee7 },
  { name: "Coffee 8", photo: Coffee8 }
];

const Product = () => {
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

                <p className="product-desc">
                  Mild Roasted
                </p>

                <div style={{ marginTop: "50px" }}>
                  {/* <a className="button button-one" href="#">Add to Order</a> */}
                  <button className="button button-one">Add to Order</button>
                </div>
              </div>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default Product;