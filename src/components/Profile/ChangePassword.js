import React, { useState } from "react";
import { toast } from "react-toastify";

import { put } from "../../utils/fetch";

import Input from "./../Input/Input";

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function ChangePassword() {

  const [userCurrPass, setUserCurrPass] = useState("");
  const [userCurrPassErr, setUserCurrPassErr] = useState("");

  const [userNewPass, setUserNewPass] = useState("");
  const [userNewPassErr, setUserNewPassErr] = useState("");
  
  const [userNewPassR, setUserNewPassR] = useState("");
  const [userNewPassRErr, setUserNewPassRErr] = useState("");

  const updateUserPass = async () => {

    setUserCurrPass(userCurrPass.trim())
    setUserNewPass(userNewPass.trim())
    setUserNewPassR(userNewPassR.trim())

    if ( !checkPassValidation() ) return

    const newPassObj = {
      currentPass: userCurrPass,
      newPass: userNewPass
    }

    const updatedPass = await put(`${apiUrl}/user/newpass`, newPassObj)

    if( !updatedPass.success ) {
      toast.error(updatedPass.message)
    } else {
      toast.success(updatedPass.message)

      setUserCurrPass('')
      setUserNewPass('')
      setUserNewPassR('')
    }

  }

  const checkPassValidation = () => {

    if( userNewPass.length < 6 ) {
      toast.error('Password must be atleast 6 characters long.')
      return false
    }

    if( userNewPass !== userNewPassR ) {
      toast.error('Password confirmation does not match.')
      return false
    }

    return true
  }

  return (
    <div className="container-fluid">
      <div className="row change-pass">

        <div className="user-field col-12">
          <Input
            val={userCurrPass}
            setter={setUserCurrPass}
            name="Current Password"
            type="password"
            err={userCurrPassErr}
            plcHolder='Your Current Password'
          />
        </div>

        <div className="user-field col-12">
          <Input
            val={userNewPass}
            setter={setUserNewPass}
            name="New Password"
            type="password"
            err={userNewPassErr}
            plcHolder='Your New Password'
          />
        </div>

        <div className="user-field col-12">
          <Input
            val={userNewPassR}
            setter={setUserNewPassR}
            name="New Password Confirm"
            type="password"
            err={userNewPassRErr}
            plcHolder='Confirm Your New Password'
          />
        </div>

        <button className="update-user-btn" onClick={updateUserPass}>
          Update
        </button>
      
      </div>
    </div>
  )
}
