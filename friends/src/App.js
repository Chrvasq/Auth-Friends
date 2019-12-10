import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
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
      <Route path="/login" component={LoginForm} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
