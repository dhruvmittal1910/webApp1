import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Router>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link to="/home">
            Login
            {/* <Link to={"/homepage"}>Login</Link> */}
          </Link>
        </form>
      </Router>
    </div>
  );
}

export default Login;
