import React, { useState } from "react";
import { post } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userExists } from "../../store/Reducer/reducer";
// import { useHistory } from 'react-router-dom'

const apiUrl = process.env.REACT_APP_API_URL;

export default function Register() {
  const dispatch = useDispatch();
  // const history = useHistory()

  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const SendRegister = async () => {
    checkFields();

    if (userNameErr.length || passwordErr.length || emailErr.length) {
      return;
    }

    const registerInfo = {
      username: userName,
      password,
    };

    const register = await post(`${apiUrl}/user/register`, registerInfo);
    console.log(register);

    if (register && register.success) {
      const user = {
        accessToken: register.access_token,
        refreshToken: register.refresh_token,
      };

      localStorage.setItem("user", user);

      dispatch(userExists(true));

      // history.push('/')
    }
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

  const checkEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const changeField = (e, setField) => {
    setField(e.target.value);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-6 offset-lg-1">
      <div className="register-title">
        <h4>Register account now</h4>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="register-user-name"
                placeholder="User Name"
                onChange={(e) => changeField(e, setUserName)}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => changeField(e, setEmail)}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="register-password"
                placeholder="Password"
                onChange={(e) => changeField(e, setPassword)}
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mb-40">
            <div className="input-checkbox inline-block">
              <label className="label-checkbox" style={{ color: "#fff" }}>
                I accept the terms and conditions, including the Privacy
                <input type="checkbox" />
                <span className="check-indicator"></span>
              </label>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mb-40">
            <button
              type="button"
              className="btn btn--primary btn--rounded"
              onClick={SendRegister}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
