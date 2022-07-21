import React from 'react'

import Hero from '../components/Profile/Hero'
import ProfileTabsWrapper from '../components/Profile/ProfileTabsWrapper'

import { Helmet } from "react-helmet";

export default function Profile() {
  return (
    <div className="view-wrapper">

      <Helmet>
				<title>Profile</title>
				<meta name="description" 
				content="View your account details and change any personal data." />
      </Helmet>

      <Hero />

      <ProfileTabsWrapper />
      
    </div>
  )
}
