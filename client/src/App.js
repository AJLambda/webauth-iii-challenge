import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./auth/Login";
import Users from "./users/Users";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default withRouter(App);
