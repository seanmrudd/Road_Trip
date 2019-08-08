import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron";
// import Card from "./components/Card";
// import Container from "./components/Container";
// import usStates from "./statesData.json";
import Flags from "./pages/Flags";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Flags} />
          <Route exact path="/Game" component={Game} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
