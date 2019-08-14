import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import GameResults from "./pages/GameResults";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import PersonalBests from "./pages/PersonalBests";
import SignUp from "./pages/SignUp";
import Wrapper from "./components/Wrapper";
import FadeIn from "./pages/FadeIn";
import GameMode from "./pages/GameMode";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={FadeIn} />
          <Route  path="/Game" component={Game} />
          <Route  path="/GameResults" component={GameResults} />
          <Route  path="/LeaderBoard" component={LeaderBoard} />
          <Route  path="/Login" component={Login} />
          <Route  path="/Menu" component={Menu} />
          <Route  path="/PersonalBests" component={PersonalBests} />
          <Route  path="/SignUp" component={SignUp} />
          <Route  path="/GameMode" component={GameMode} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
