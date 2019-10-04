import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingpage/LandingPage";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
