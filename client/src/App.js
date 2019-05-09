import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./auth/Login";
import Users from "./users/Users";

import "./App.css";

function App(props) {
  function logout() {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  }
  return (
    <>
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>

      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default withRouter(App);
