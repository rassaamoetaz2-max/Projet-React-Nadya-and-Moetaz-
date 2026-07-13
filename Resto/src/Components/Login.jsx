import React, { useState } from "react";
import "../CSS/Login.css";
import Footer from "./Footer";
import LoginHeader from "./LoginHeader";
function Login({ mode, loginUser, createUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <LoginHeader></LoginHeader>

      <div className="login-page">
      <div className="login-card">

        <h1 className="login-title">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="login-subtitle">
          {mode === "login"
            ? "Sign in to continue."
            : "Fill in your information below."}
        </p>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
             if (mode === "login") {
      loginUser(email, password);
    } else {
      createUser(email,userName ,password);
    }
            
           
          }}
        >
          {mode !== "login" ? (
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          ):null}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="submit-btn">
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="terms">
          By proceeding you agree to our <strong>Terms and Conditions</strong>,
          <strong> Privacy Statement</strong>, and
          <strong> Cookie Policy</strong>.
        </div>

      </div>
    </div>
    <Footer></Footer>
    </div>
    
  );
}

export default Login;