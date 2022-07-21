import React from 'react'
import Title from '../components/Terms/Title'
import Content from '../components/Terms/Content'

import { Helmet } from "react-helmet";

export default function Terms() {
	return (
		<div className="view-wrapper" >
			
			<Helmet>
				<title>Terms</title>
      </Helmet>

			<Title />

			<Content />

		</div>
	)
}
