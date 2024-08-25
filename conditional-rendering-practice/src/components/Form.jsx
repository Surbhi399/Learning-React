import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.IsRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.IsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
