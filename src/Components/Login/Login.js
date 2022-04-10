import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //   const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const handleEmailblur = (e) => {
    setEmail(e.target.value);
  };
  const handlePassblur = (e) => {
    setPass(e.target.value);
  };
  if (user) {
    navigate("/home");
  }

  const handlesubmitForm = (e) => {
    signInWithEmailAndPassword(email, pass);
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login </h1>
        <form onSubmit={handlesubmitForm} action="">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input
              onBlur={handleEmailblur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <input
              onBlur={handlePassblur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p>Error: {error?.message}</p>
          <input className="button" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-Jhon?{" "}
          <Link className="link" to="/signup">
            Create an Acount
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
