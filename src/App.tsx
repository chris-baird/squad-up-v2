import React, { Component } from "react";
import { Container } from "./Components/BootstrapComponents/Grid";
import Nav from "./Components/BootstrapComponents/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <p />
        </Container>
      </div>
    );
  }
}

export default App;
