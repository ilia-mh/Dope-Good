import React from 'react'

export default function Register() {
	return (
		<div className="col-sm-12 col-md-6 col-lg-6 offset-lg-1">\

            <div className="register-title">
              <h4>Register account now</h4>
              <p>Pellentesque habitant morbi tristique senectus et netus et</p>
            </div>
            {/* .register-title end  */}

            <form>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                {/* .col-lg-6 end  */}

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="register-user-name"
                      placeholder="User Name"
                    />
                  </div>
                </div>
                {/* .col-lg-6 end  */}

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                {/* .col-lg-6 end  */}

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* .col-lg-6 end  */}

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="register-password"
                      placeholder="Password"
                    />
                  </div>
                </div>

                {/* .col-lg-6 end  */}
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group mb-40">
                    <input
                      type="password"
                      className="form-control"
                      id="register-password-confirm"
                      placeholder="Re Password"
                    />
                  </div>
                </div>
                {/* .col-lg-6 end  */}

                <div className="col-sm-12 col-md-12 col-lg-12 mb-40">
                  <div className="input-checkbox inline-block">
                    <label className="label-checkbox">
                      I accept the terms and conditions, including the Privacy
                      <input type="checkbox" checked />
                      <span className="check-indicator"></span>
                    </label>
                  </div>
                </div>
                {/* .col-lg-12 end  */}

                <div className="col-sm-12 col-md-12 col-lg-12 mb-40">
                  <a href="/#" className="btn btn--primary btn--rounded">
                    Register
                  </a>
                </div>
                
              </div>
              {/* .row end  */}
            </form>
          </div>

	)
}
