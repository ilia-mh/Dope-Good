import React from 'react'
import LogIn from '../components/Login/LogIn'

import { Helmet } from "react-helmet";

export default function Login() {
	return (
		<div className="view-wrapper" style={{ paddingTop: 0 }}>

			<Helmet>
				<title>Login</title>
      </Helmet>

			<LogIn/>

		</div>
	)
}
