import React, { useState } from "react";
import { post } from "../../../utils/fetch";

import Input from "../../Input/Input";

const apiUrl = process.env.REACT_APP_API_URL;

export default function ForgotForm() {
  const [username, setUserName] = useState("");
  const [usernameErr, setUserNameErr] = useState("");

  const submitForgotPass = async () => {

    console.log('submitting forgot pass')

    checkUsername()

    if( usernameErr.length ) {
      console.log('invalid username or email')
      return
    }

    const forgotPassReq = await post( `${apiUrl}/api/user/forgot-pass`, {
      username
    })

    console.log(forgotPassReq)
  }

  const checkUsername = () => {
    if( username.length < 3 ) {
      setUserNameErr('a valid username or email is required')
    }
  }

  return (
    <section className="forgot-pass-form pt-30">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
            {/* Form */}

            <form onSubmit={(e) => e.preventDefault()} className="login-form">
              <div className="row">

                <div className="col-sm-12 col-md-12 col-lg-12 mb-20">

                  <Input
                    val={username}
                    setter={setUserName}
                    name="Username or Email"
                    type="text"
                    err={usernameErr}
                  />

                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 mb-30">
                  <button style={{ display: 'block', margin: '0 auto'}} type="button" className="btn btn--primary btn--rounded" onClick={submitForgotPass} >
                    Send reset password link
                  </button>
                </div>

              </div>
            </form>

            {/* Form End */}
          </div>
        </div>
      </div>
    </section>
  );
}
