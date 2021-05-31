import React from "react";
import LogIn from './LogIn'
import Register from './Register'

export default function LoginWrapper() {
  return (
    <section id="register-login" className="register-login pt-30 pb-150">
      <div className="container">
        <div className="row">

          <LogIn />

          <Register />

        </div>
        {/* .row end  */}
      </div>
      {/* .container end  */}
    </section>
  );
}
