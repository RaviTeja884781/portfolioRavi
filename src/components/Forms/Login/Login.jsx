import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <p>REACT JS</p>
      <form className="login_form">
        <h3>Access React Js</h3>
        <div className="login_form_inp1">
          <input type="text||email" placeholder="Email or phone number" />
        </div>
        <div className="login_form_inp2">
          <input type="text" placeholder="password" />
        </div>
        <div className="login_form_btn">
          <button type="submit">Login</button>
        </div>
        <div className="login_form_link">
          <Link to="/signup">Forgot Account . Register for React js</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
