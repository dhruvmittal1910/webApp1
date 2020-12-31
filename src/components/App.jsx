import React from "react";
import Header from "./Header";
import Login from "./Login";
import Homepage from "./Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
