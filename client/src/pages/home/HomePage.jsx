import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import MyPhoto from "../../assets/images/coffee.jpg";

const Categories = [
  {
    count: 0,
    title: "Hot Coffees",
    photo: ""
  },
  {
    count: 1,
    title: "Hot Teas",
    photo: ""
  },
  {
    count: 2,
    title: "Hot Drinks",
    photo: ""
  },
  {
    count: 3,
    title: "Cold Coffees",
    photo: ""
  },
  {
    count: 4,
    title: "Cold Drinks",
    photo: ""
  }
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Menu</h1>
      <Row xs={12} md={4} className="justify-content-around" >
        {Categories.map(Category => {
          return (
            <Link key={Category.count} className="link" to="/product">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={MyPhoto} />
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

export default HomePage;