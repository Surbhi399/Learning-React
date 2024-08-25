import React from "react";
import Login from "./Login";

var IsLogedIn = true;

function App() {
  return (
    <div className="container">
      {IsLogedIn === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
