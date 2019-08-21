import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FadeIn from "./pages/FadeIn/index";
import Game from "./pages/Game/index";
import GameHard from "./pages/GameHard/index";
import GameMode from "./pages/GameMode/index";
import GameResults from "./pages/GameResults/index";
import LeaderBoard from "./pages/LeaderBoard/index";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import Menu from "./pages/Menu/index";
import PersonalBests from "./pages/PersonalBests/index";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FadeIn} />
          <Route path="/Game" component={Game} />
          <Route path="/GameHard" component={GameHard} />
          <Route path="/GameResults" component={GameResults} />
          <Route path="/LeaderBoard" component={LeaderBoard} />
          <Route path="/Login" component={Login} />
          <Route path="/Menu" component={Menu} />
          <Route path="/PersonalBests" component={PersonalBests} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/GameMode" component={GameMode} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
