import React from "react";
import Container from "react-bootstrap/Container";

const Layout = (props) => (
    <Container fluid>
      {props.children} 
    </Container>
);

export default Layout;