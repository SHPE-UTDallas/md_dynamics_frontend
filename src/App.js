import "./App.css";
import Login from "./components/Login";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MonthlyView from "./components/MonthlyView/MonthlyView";
import reportWebVitals from "./reportWebVitals";
import Win from "./components/EndPages/Win"
import Lose from "./components/EndPages/Lose"
import {useState} from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [firstName, setFirstName] = useState("Dear Customer");

  const handleClick = (e) => {
    setFirstName(e.target.value);
  }

  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/monthlyView">
              <MonthlyView firstName={firstName}/>
            </Route>

            <Route exact path="/lose">
              <Lose />
            </Route>

            <Route exact path="/win">
              <Win />
            </Route>

            <Route exact path="/">
               <Login handleClick={handleClick}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
