import React, { Component } from "react";
import { Container, Row, Col } from "./Components/BootstrapComponents/Grid";
import Nav from "./Components/BootstrapComponents/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Row>
            <Col size={"col-sm-12"}>
              <p>Search Area</p>
            </Col>
          </Row>
          <Row>
            <Col size={"col-lg-10 col-md-10 col-sm-12 main"}>
              <p>All Games</p>
            </Col>
            <Col size="col-lg-2 col-md-2 d-none d-sm-block d-sm-none d-md-block">
              <div className="side1">Side 1</div>
              <div className="side2">Side 2</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
