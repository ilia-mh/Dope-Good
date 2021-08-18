import React, { useState } from "react";
import { post } from '../../utils/fetch';
import { useDispatch } from 'react-redux';
import { userExists } from "../../store/Reducer/reducer";
// import { useHistory } from 'react-router-dom'

const apiUrl = process.env.REACT_APP_API_URL

export default function LogIn() {

	const dispatch = useDispatch()
	// const history = useHistory()

	const [userName,setUserName] = useState('')
	const [userNameErr,setUserNameErr] = useState('')

	const [password,setPassword] = useState('')
	const [passwordErr,setPasswordErr] = useState('')

	const SendLogin = async () => {

		checkFields()

		if( userNameErr.length || passwordErr.length ) {
			return
		}

		const loginInfo = {
			username: userName,
			password
		}

		const login = await post( `${apiUrl}/user/login`, loginInfo )
		console.log(login)

		if( login && login.success ) {

			const user = {
				accessToken: login.access_token,
				refreshToken: login.refresh_token,
			}

			localStorage.setItem('user', user)

			dispatch( userExists(true) )

			// history.push('/')
		}
	}

	const checkFields = () => {
		setUserNameErr('')
		setPasswordErr('')

		if( userName.length < 3 ) {
			setUserNameErr('User Name Must be atleast 3 characters')
		}

		if( password.length < 4 ) {
			setUserNameErr('Password Must be atleast 3 characters')
		}
	}
	
	const changeField = (e,setField) => {
		setField(e.target.value)
	}

  return (
    <div className="col-sm-12 col-md-6 col-lg-5">

      <div className="register-title">
        <h4>Login your account</h4>
      </div>

      <form onSubmit={ (e) => e.preventDefault() } >
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="user-name"
                placeholder="User Name"
								onChange={ (e) => changeField(e,setUserName) }
              />
            </div>
          </div>
					
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="login-password"
                placeholder="Your Password"
								onChange={ (e) => changeField(e,setPassword) }
              />
            </div>
          </div>
					
          <div className="col-sm-12 col-md-12 col-lg-12 mb-40">
            <div className="input-checkbox inline-block">
              <label className="label-checkbox" style={{ color: '#fff'}}>
                Keep me logged in
                <input type="checkbox" />
                <span className="check-indicator"></span>
              </label>
            </div>

            <button type="button" className="forget--password">
              Forgot your password?
            </button>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mb-30">
            <button type="button" className="btn btn--primary btn--rounded" onClick={SendLogin} >
              Login
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}