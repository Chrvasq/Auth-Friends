import React, { useState } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  const [friends, setFriends] = useState();

  const getFriendsData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.message));
  };

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
        <PrivateRoute
          exact
          path="/friends"
          component={FriendsList}
          friends={friends}
          setFriends={setFriends}
          getFriendsData={getFriendsData}
        />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
