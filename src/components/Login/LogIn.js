import React from "react";

export default function LogIn() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-5">
      <div className="register-title">
        <h4>Login your account</h4>
        <p>
          Login to your account to discovery all great features in this item
        </p>
      </div>
      {/* .register-title end  */}
      <form>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="user-name"
                placeholder="User Name"
              />
            </div>
          </div>
          {/* .col-lg-12 end  */}
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="login-password"
                placeholder="Your Password"
              />
            </div>
          </div>
          {/* .col-lg-12 end  */}
          <div className="col-sm-12 col-md-12 col-lg-12 mb-40">
            <div className="input-checkbox inline-block">
              <label className="label-checkbox">
                Keep me logged in
                <input type="checkbox" checked />
                <span className="check-indicator"></span>
              </label>
            </div>
            <a href="/#" className="forget--password">
              Forgot your password?
            </a>
          </div>
          {/* .col-lg-12 end  */}

          <div className="col-sm-12 col-md-12 col-lg-12 mb-30">
            <a href="/#" className="btn btn--primary btn--rounded">
              Login
            </a>
          </div>
          {/* .col-lg-12 end  */}

        </div>
        {/* .row end  */}
      </form>
    </div>
  );
}
