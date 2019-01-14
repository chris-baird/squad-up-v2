import React, { Component } from "react";
import { Container, Row, Col } from "./Components/BootstrapComponents/Grid";
import Nav from "./Components/BootstrapComponents/Nav";
import FilterNav from "./Components/FilterNav";
import MainDisplay from "./Components/MainDisplay";
import GameCard from "./Components/GameCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Row>
            <Col size={"col-sm-12"}>
              <FilterNav />
            </Col>
          </Row>
          <Row>
            <Col size={"col-lg-10 col-md-10 col-sm-12 main"}>
              <MainDisplay>
                <Row>
                  <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <img
                      src="https://placeimg.com/600/800/any"
                      className="img-fluid"
                      alt=""
                    />
                  </Col>
                  <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <img
                      src="https://placeimg.com/600/800/any"
                      className="img-fluid"
                      alt=""
                    />
                  </Col>
                  <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <img
                      src="https://placeimg.com/600/800/any"
                      className="img-fluid"
                      alt=""
                    />
                  </Col>
                  <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <img
                      src="https://placeimg.com/600/800/any"
                      className="img-fluid"
                      alt=""
                    />
                  </Col>
                  <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <img
                      src="https://placeimg.com/600/800/any"
                      className="img-fluid"
                      alt=""
                    />
                  </Col>
                </Row>
              </MainDisplay>
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
