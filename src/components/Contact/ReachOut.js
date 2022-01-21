import React, { useState } from 'react'
import ContactImg1 from '../../assets/images/contact/gallery/1.jpg'
import ContactImg2 from '../../assets/images/contact/gallery/2.jpg'
import Slider from '../Slider/Slider'

import './ReachOut.scss'
import { checkEmail } from './../../utils/CheckMail';
import { toast } from 'react-toastify'
import { post } from '../../utils/fetch'

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function ReachOut() {

  const [name,setName] = useState('')
  const [nameErr,setNameErr] = useState('')

  const [email,setEmail] = useState('')
  const [emailErr,setEmailErr] = useState('')

  const [subject,setSubject] = useState('')
  const [subjectErr,setSubjectErr] = useState('')

  const [message,setMessage] = useState('')
  const [messageErr,setMessageErr] = useState('')

  const sendContactForm = async () => {

    setNameErr('')
    setEmailErr('')
    setSubjectErr('')
    setMessageErr('')

    if( !checkFieldsForSend ) {
      toast.error('Please fill out the forms for contact form')
      return
    }

    const contactForm = {
      name,
      email,
      subject,
      message
    }

    const createContactForm = await post(`${apiUrl}/contact`, contactForm)

    if( !createContactForm.success ) {
      toast.error('An error occured while creating your ticket. Please try again later.')
    } else {
      toast.success('Your ticket has been submitted successfuly. We will be in touch with you as soon as possible.')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }

  }

  const checkFieldsForSend = () => {
    
    let validationResult = true

    if( !name ) {
      setNameErr('Name fields is empty')
      validationResult = false
    }

    if( !email || !checkEmail(email) ) {
      setNameErr('Invalid email')
      validationResult = false
    }

    if( !subject ) {
      setNameErr('Subject fields is empty')
      validationResult = false
    }

    if( !message ) {
      setNameErr('Message fields is empty')
      validationResult = false
    }

    return validationResult
  }

	return (
		<section
        id="contact3"
        className="contact contact-3 contact-gallery pt-0 pb-0"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 left-side">
              <div
                className="contact-carousel owl-carousel"
              >	

								<Slider>

									<div className="gallery--item">
										<img src={ContactImg1} alt="img" />
									</div>
									{/* .gallery-item end  */}
									<div className="gallery--item">
										<img src={ContactImg2} alt="img" />
									</div>

								</Slider>
								

              </div>


              <div className="heading heading-2">
                <p className="heading--subtitle">CONECT WITH US</p>
                <h2 className="heading--title">Contact Us</h2>
              </div>
               {/* .heading end  */}

            </div>

             {/* .col-lg-6 end  */}
            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="contact-panel mt-100">
                    <div className="contact--content">
                      <h3>
                        No. 342 - London Oxford Street, 012 United Kingdom.
                      </h3>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="mailto:Support@dopegood.net"
                            >Support@dopegood.net</a
                          >
                        </li>
                        <li>
                          <a href="tel:03433455634">Phone: +(034) 334 55634</a>
                        </li>
                      </ul>
                    </div>
                     {/* .contact-content end  */}
                  </div>
                   {/* .contact-panel end  */}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h3>Get In Touch With Us</h3>
                  <form
                    className="contactForm mb-0"
                    onSubmit={ e => e.preventDefault() }
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        value={name}
                        onChange={ e => setName(e.target.value) }
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                      {
                        nameErr &&
                        <span className="error">{nameErr}</span>
                      }
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                      {
                        emailErr &&
                        <span className="error">{emailErr}</span>
                      }
                    </div>

                    <div className="form-group">
                      <input
                        value={subject}
                        onChange={ e => setSubject(e.target.value) }
                        type="email"
                        className="form-control"
                        id="subject"
                        placeholder="subject"
                      />
                      {
                        subjectErr &&
                        <span className="error">{subjectErr}</span>
                      }
                    </div>

                    <div className="form-group mb-30">
                      <textarea
                        className="form-control"
                        value={message}
                        onChange={ e => setMessage(e.target.value) }
                        id="message"
                        rows="2"
                        placeholder="Your message here"
                      ></textarea>

                      {
                        messageErr &&
                        <span className="error">{messageErr}</span>
                      }
                    </div>

                    <button type="button" className="btn btn--primary btn--rounded reach-out-btn" onClick={sendContactForm}>
                      SEND TO US
                    </button>

                  </form>
                </div>
              </div>
               {/* .row end  */}

            </div>
             {/* .col-lg-6 end  */}
          </div>
           {/* .row end  */}
        </div>
         {/* .container end  */}
      </section>
	)
}
