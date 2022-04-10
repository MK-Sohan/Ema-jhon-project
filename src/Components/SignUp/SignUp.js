import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  // ==============================
  const navigate = useNavigate();
  const handleEmailblur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordblur = (event) => {
    setPassword(event.target.value);
    setError("");
  };
  const handleConfirmPasswordblur = (event) => {
    setConfirmpassword(event.target.value);
  };
  if (user) {
    navigate("/home");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setError("Password did not match");
      return;
    }
    if (password.length < 6) {
      setError("password must be in 6 charecter");
      return;
    }
    createUserWithEmailAndPassword(email, password).then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up </h1>
        <form onSubmit={handleCreateUser} action="">
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
              onBlur={handlePasswordblur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password"> Confirm password </label>
            <input
              onBlur={handleConfirmPasswordblur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
            <p style={{ color: "red" }}>{error}</p>
          </div>
          <input className="button" type="submit" value="Sign up" />
        </form>
        <p>
          Already Have an Acount?{" "}
          <Link className="link" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
