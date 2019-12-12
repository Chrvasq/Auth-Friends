import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
