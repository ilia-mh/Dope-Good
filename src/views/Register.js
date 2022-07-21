import React from 'react'
import RegisterForm from '../components/Register/Register'

import { Helmet } from "react-helmet";

export default function Register() {
	return (
		<div className="view-wrapper" style={{ paddingTop: 0 }}>

			<Helmet>
				<title>Register</title>
      </Helmet>

			<RegisterForm/>

		</div>
	)
}
