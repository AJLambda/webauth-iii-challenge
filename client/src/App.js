import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Users from "./users/Users";

import "./App.css";

function App(props) {
  function logout() {
    localStorage.removeItem("jwt");
    props.history.push("/signin");
  }
  return (
    <>
      <header>
        <NavLink to="/signup">Register</NavLink>
        <NavLink to="/signin">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>

      <main>
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default withRouter(App);
