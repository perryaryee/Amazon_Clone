import React, { useState } from "react";
import "../Pages/Login.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../firebase";
import { useParams } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();
  //const {id} = useParams();
  //const {id} = useParams();

  const Handleemail = (event) => {
    // event.preventDefault();
    const inputs = event.target.value;
    setemail(inputs);
  };

  const Handlepassword = (event) => {
    const inputs2 = event.target.value;
    setpassword(inputs2);
  };
  const SignIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
    // firebase Stuff
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={SignIn}>
          <h5>Email</h5>
          <input type="text" value={email} onChange={Handleemail} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={Handlepassword} />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By singing-in you agreeto the AMAZON FAKE CLONE Conditions of Use &
          Sales.Please see our Privacy Notice, our Cookies Notice and our
          Intrest Based DSNotice
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
