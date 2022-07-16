import React, { useState, useEffect } from "react";
import { post } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userExists } from "../../store/Reducer/reducer";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "./login.scss";

const apiUrl = process.env.REACT_APP_API_URL;

export default function LogIn() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [screenSize, setScreenSize] = useState(
    window ? (window.innerWidth > 768 ? "lg" : "sm") : null
  );

  const SendLogin = async () => {
    checkFields();

    if (userNameErr.length || passwordErr.length) {
      return;
    }

    const loginInfo = {
      username: userName,
      password,
    };

    const login = await post(`${apiUrl}/api/user/login`, loginInfo);
    console.log(login);

    if (login && login.success) {
      toast.success("You Logged in successfully");

      const user = {
        accessToken: login.access_token,
        refreshToken: login.refresh_token,
      };

      localStorage.setItem("user", JSON.stringify(user));

      dispatch(userExists(true));

      try {
        history.goBack();
      } catch (e) {
        history.push("/");
      }
    } else toast.error("Wrong login info");
  };

  const checkFields = () => {
    setUserNameErr("");
    setPasswordErr("");

    if (userName.length < 3) {
      setUserNameErr("User Name Must be atleast 3 characters");
    }

    if (password.length < 4) {
      setUserNameErr("Password Must be atleast 3 characters");
    }
  };

  const changeField = (e, setField) => {
    setField(e.target.value);
  };

  useEffect(() => {
    if (screenSize === null) {
      if (window.innerWidth > 768) setScreenSize("lg");
      else setScreenSize("sm");
    }

    window.addEventListener("resize", changeLoginImg);

    return () => window.removeEventListener("resize", changeLoginImg);
  }, [screenSize, setScreenSize]);

  const changeLoginImg = () => {
    if (window.innerWidth <= 768 && screenSize === "lg") setScreenSize("sm");
    else if (window.innerWidth > 768 && screenSize === "sm")
      setScreenSize("lg");
  };

  return (
    <div className="login-container">
      <div className="login-img">
      {
          screenSize !== null ? 
            <img src={ screenSize === 'lg' ? 'login-lg.jpg' : 'login-sm.jpg' } 
              alt="login" />
          :
            ''
        }
      </div>

      <div className="login_form">
        <div className="login-title">
          <h1>Login</h1>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          
          <input
            type="text"
            className="username-inpt"
            id="username"
            placeholder="Username"
            onChange={(e) => changeField(e, setUserName)}
            autoComplete="off"
          />

          <input
            type="password"
            className="pass-inpt"
            id="password"
            placeholder="Password"
            onChange={(e) => changeField(e, setPassword)}
          />

          <button
            type="button"
            className="login-btn btn btn--primary btn--rounded"
            onClick={SendLogin}
          >
            Login
          </button>

          <Link to="/login/forgot" className="forget--password">
            Forgot your password?
          </Link>

        </form>
      </div>
    </div>
  );
}
