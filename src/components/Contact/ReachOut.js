import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./ReachOut.scss";
import { checkEmail } from "./../../utils/CheckMail";
import { toast } from "react-toastify";
// import { post } from "../../utils/fetch";

// const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function ReachOut() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [message, setMessage] = useState("");

  const sendContactForm = async () => {
    setNameErr("");
    setEmailErr("");

    if (!checkFieldsForSend()) {
      toast.error("Please fill out the forms for contact form");
      return;
    }

    // const contactForm = {
    //   name,
    //   email,
    //   message,
    // };

    // const createContactForm = await post(`${apiUrl}/contact`, contactForm);

    // if (!createContactForm.success) {
    //   toast.error(
    //     "An error occured while creating your ticket. Please try again later."
    //   );
    // } else {
      setTimeout(() => {
        toast.success(
          "Your ticket has been submitted successfuly. We will be in touch with you as soon as possible."
        );
        setName("");
        setEmail("");
        setMessage("");
      }, 300);
    // }
  };

  const checkFieldsForSend = () => {
    let validationResult = true;

    if (!name) {
      setNameErr("Name fields is empty");
      validationResult = false;
    }

    if (!email || !checkEmail(email)) {
      setEmailErr("Invalid email");
      validationResult = false;
    }

    return validationResult;
  };

  useEffect(() => {
    gsap.to(".form-ball", {
      scale: 1,
      scrollTrigger: {
        id: "contactGrowingBall",
        start: "top-=100px bottom",
        trigger: ".contactForm",
        end: "bottom bottom",
        scrub: 0.1,
      },
      ease: "none",
      duration: 0.3,
    });

    return () => {
      ScrollTrigger.getById("contactGrowingBall")?.kill();
    };
  }, []);

  return (
    <section className="contact-gallery">
      <div className="form-ball"></div>

      <div className="container-fluid row">
        
        <div className="col-sm-12">

          <form className="contactForm" onSubmit={(e) => e.preventDefault()}>

            <h2>Contact us</h2>

            <div className="form-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="name"
                placeholder="Name"
              />
              {nameErr && <span className="error">{nameErr}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Email"
              />
              {emailErr && <span className="error">{emailErr}</span>}
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows="2"
                placeholder="Message"
              ></textarea>
              
            </div>

            <button
              type="button"
              className="btn btn--primary btn--rounded reach-out-btn"
              onClick={sendContactForm}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
