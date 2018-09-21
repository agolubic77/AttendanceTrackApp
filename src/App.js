import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Players from "./components/players";
import NotFound from "./components/notFound";
import NavBar from "./components/NavBar";
import PlayerPage from "./components/playerPage";
import PlayerForm from "./components/playerForm";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <NavBar />
        </div>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/players/:id/:name" component={PlayerPage} />
            <Route path="/players/:id" component={PlayerForm} />
            <Route path="/players" component={Players} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/players" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
