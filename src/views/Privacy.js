import React from 'react'
import Title from '../components/Privacy/Title'
import Content from '../components/Privacy/Content'

import { Helmet } from "react-helmet";

export default function Privacy() {
	return (
		<div className="view-wrapper" >
			
			<Helmet>
				<title>Privacy</title>
      </Helmet>

			<Title />

			<Content />

		</div>
	)
}
