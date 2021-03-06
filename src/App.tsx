import React, { Component } from "react";
import { Container, Row, Col } from "./Components/BootstrapComponents/Grid";
import Nav from "./Components/BootstrapComponents/Nav";
import FilterNav from "./Components/FilterNav";
import MainDisplay from "./Components/MainDisplay";
import GameCard from "./Components/GameCard";
import TopGames from "./Components/TopGames";
import MyGames from "./Components/MyGames";

class App extends Component {
  state = {
    view: "test"
  };

  render() {
    let currentView;
    if (this.state.view === "main") {
      currentView = (
        <MainDisplay>
          <Row>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
            <Col size="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <GameCard />
            </Col>
          </Row>
        </MainDisplay>
      );
    } else if (this.state.view === "test") {
      currentView = <p>Test</p>;
    }

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
            <Col size={"col-lg-10 col-md-10 col-sm-12 main"}>{currentView}</Col>
            <Col size="col-lg-2 col-md-2 d-none d-sm-block d-sm-none d-md-block">
              <TopGames />
              <MyGames />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
