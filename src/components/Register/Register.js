import React, { useState, useEffect } from "react";
import { post } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userExists } from "../../store/Reducer/reducer";
import { useHistory } from "react-router-dom";

import { checkEmail } from "../../utils/CheckMail";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import './register.scss'

const apiUrl = process.env.REACT_APP_API_URL;

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [termsAccept, setTermsAccept] = useState(false);

  const SendRegister = async () => {
    checkFields();

    if (userNameErr.length || passwordErr.length || emailErr.length) {
      return;
    }

    const registerInfo = {
      username: userName,
      password,
    };

    if (email.length) registerInfo.email = email;

    const register = await post(`${apiUrl}/api/user/register`, registerInfo);
    console.log(register);

    if (register && register.success) {
      toast.success("Your registration was successfull.");

      const user = {
        accessToken: register.access_token,
        refreshToken: register.refresh_token,
      };

      localStorage.setItem("user", JSON.stringify(user));

      dispatch(userExists(true));

      try {
        history.goBack();
      } catch (e) {
        history.push("/");
      }
    } else toast.error("An error occured while registering you.");
  };

  const checkFields = () => {
    setUserNameErr("");
    setPasswordErr("");
    setEmailErr("");

    if (userName.length < 3) {
      setUserNameErr("User Name Must be atleast 3 characters");
    }

    if (!checkEmail(email)) setEmailErr("Email Not Valid");

    if (password.length < 4) {
      setUserNameErr("Password Must be atleast 3 characters");
    }
  };

  const changeField = (e, setField) => {
    setField(e.target.value);
  };

  const [screenSize, setScreenSize] = useState(
    window ? (window.innerWidth > 768 ? "lg" : "sm") : null
  );

  useEffect(() => {
    if (screenSize === null) {
      if (window.innerWidth > 768) setScreenSize("lg");
      else setScreenSize("sm");
    }

    window.addEventListener("resize", changeRegisterImg);

    return () => window.removeEventListener("resize", changeRegisterImg);
  }, [screenSize, setScreenSize]);

  const changeRegisterImg = () => {
    if (window.innerWidth <= 768 && screenSize === "lg") setScreenSize("sm");
    else if (window.innerWidth > 768 && screenSize === "sm")
      setScreenSize("lg");
  };

  return (
    <div className="register-container">

      <div className="register-img">
        {screenSize !== null ? (
          <img
            src={screenSize === "lg" ? "register-lg.jpg" : "register-sm.jpg"}
            alt="register"
          />
        ) : (
          ""
        )}
      </div>

      <div className="register_form">
        <div className="register-title">
          <h1>Register</h1>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            onChange={(e) => changeField(e, setUserName)}
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => changeField(e, setEmail)}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => changeField(e, setPassword)}
          />

          <div className="accept-terms input-checkbox inline-block">
            <label className="label-checkbox" style={{ color: "#fff" }}>
              I accept the terms and conditions, including the Privacy
              <input
                type="checkbox"
                value={termsAccept}
                onChange={(e) => setTermsAccept(!termsAccept)}
              />
              <span className="check-indicator">
                {termsAccept && <div className="active-checkbox"></div>}
              </span>
            </label>
          </div>

          <button
            className="register-btn btn btn--primary btn--rounded"
            onClick={SendRegister}
            disabled={!termsAccept}
          >
            Register
          </button>
        </form>

      </div>

    </div>
  );
}
