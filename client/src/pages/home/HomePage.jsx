import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../redux/product/product.actions";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";


//Photos
let hottea1 = "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
let hotcoffee1 = "https://images.unsplash.com/photo-1450024529642-858b23834369?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
let hotdrinks1 = "https://images.unsplash.com/photo-1536513953700-ba24c78a5f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
// let coldtea1 = "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
let colddrink1 = "https://images.unsplash.com/photo-1524156868115-e696b44983db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
let coldcoffee1 = "https://images.unsplash.com/photo-1481455473976-c280ae7c10f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80";

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