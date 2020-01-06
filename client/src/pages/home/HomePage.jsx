import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";


//Photos
let hottea1 = "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?cs=srgb&dl=aromatic-close-cup-1417945.jpg&fm=jpg"
let hotcoffee1 = "https://images.pexels.com/photos/533403/pexels-photo-533403.jpeg?cs=srgb&dl=beverage-break-caffeine-533403.jpg&fm=jpg"
let hotdrinks1 = "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?cs=srgb&dl=close-up-of-coffee-cup-324028.jpg&fm=jpg"
// let coldtea1 = "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?cs=srgb&dl=alcohol-bar-blurred-background-1194030.jpg&fm=jpg"
let colddrink1 = "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?cs=srgb&dl=summer-drinks-drink-still-life-109275.jpg&fm=jpg"
let coldcoffee1 = "https://images.pexels.com/photos/1023949/pexels-photo-1023949.jpeg?cs=srgb&dl=beverage-brown-caffeine-1023949.jpg&fm=jpg";

const Categories = [
  {
    count: 0,
    title: "Hot Coffees",
    photo: hotcoffee1
  },
  {
    count: 1,
    title: "Hot Teas",
    photo: hottea1
  },
  {
    count: 2,
    title: "Hot Drinks",
    photo: hotdrinks1
  },
  {
    count: 3,
    title: "Cold Coffees",
    photo: coldcoffee1
  },
  {
    count: 4,
    title: "Cold Drinks",
    photo: colddrink1
  }
];


const HomePage = ({getProducts}) => {
  return (
    <div className="homepage-container">
      <h1>Menu</h1>
      <Row xs={12} md={4} className="justify-content-around" >
        {Categories.map(Category => {
          return (
            // <Link key={Category.count} className="link" to="/product">
            // DZ - Passing title (example"coffees") to product in order to know what product to show
            <Link key={Category.count} className="link" to="/product" onClick={() => getProducts(Category.title)}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Category.photo} />
                <Card.Body>
                  <Card.Title>{Category.title}</Card.Title>
                </Card.Body>
              </Card>
             </Link>
          );
        })}
      </Row>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getProducts: category => dispatch(getProducts(category))
})

export default connect(null, mapDispatchToProps)(HomePage);