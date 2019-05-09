import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./auth/Login";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavLink to="/login">Login</NavLink>
      </header>
      <main>
        <Route path="/login" component={Login} />
      </main>
    </>
  );
}

export default App;
