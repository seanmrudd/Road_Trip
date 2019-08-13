import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Flags from "./pages/Flags";
import Game from "./pages/Game";
import GameResults from "./pages/GameResults";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import PersonalBests from "./pages/PersonalBests";
import SignUp from "./pages/SignUp";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Flags} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/GameResults" component={GameResults} />
          <Route exact path="/LeaderBoard" component={LeaderBoard} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Menu" component={Menu} />
          <Route exact path="/PersonalBests" component={PersonalBests} />
          <Route exact path="/SignUp" component={SignUp} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
