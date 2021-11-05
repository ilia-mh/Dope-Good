import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { checkEmail } from '../../utils/CheckMail'
import { get } from '../../utils/fetch'
import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_API_URL

export default function Subscribe() {

  const [subscriberMail,setSubscriberMail] = useState('')

  const sendEmail = async () => {
    
    if( !subscriberMail || !checkEmail(subscriberMail) ) {
      toast.error('email not valid')
      return
    }

    const discountToken = await get(`${apiUrl}/api/distoken/${subscriberMail}`)

    console.log('discountToken')
    console.log(discountToken)

    if( !discountToken.success ) {

      if( discountToken.code === 21 ) {
        toast.error( discountToken.message )
        return

      } else {

        toast.error('An Error occured during subscribing you. please try again later.')
        return
      }

    }

    const templateParams = {
      subscriber_email: subscriberMail,
      discount_token: discountToken.disToken
    }

    emailjs.send('service_k08fyfh', 'template_cVxkpJ5b', templateParams ,'user_ttrETVA5PV1DLq0MoMOvh')
      .then((result) => {
          console.log(result.text);
          setSubscriberMail('')
          toast.success('You have successfuly subscribed to our newsletter.')
        }, (error) => {
          console.log(error);
          toast.error(error.text)
      });
  };

  return (
    <div
      className="col-sm-12 col-md-6 col-lg-3 text-center-xs widget--newsletter"
    >
      <div className="widget--content">
        <h3>GET 20% OFF</h3>
        <p>By subscribing to our newsletter</p>

        <div className="subscription-form">

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={subscriberMail}
            onChange={ (e) => setSubscriberMail(e.target.value) }
          />

          <button type="btn" onClick={sendEmail} className="subscribe-btn">
            <i className="fa fa-chevron-right"></i>
          </button>

        </div>

      </div>
    </div>
  );
}
