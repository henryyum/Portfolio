import React from "react";
import "./Contact.css";

export default function Contact() {
  const handleEmail = () => {
    const email = "henry.yum1993@hotmail.com";
    const mailToLink = `mailto:${email}`;

    window.location.href = mailToLink;
  };
  return (
    <div>
      <div className="Contact-Section">
        <h4>Contact Me</h4>
        <h1>Lets Connect.</h1>
      </div>

      <div className="Container">
        <div className="contact-left">
          <img
            className="contact-icon contact-btn"
            src="/images/placeholder.png"
            alt=""
          />

          <div>
            <h3>Location</h3>
            <p>Melbourne, Australia</p>
          </div>
        </div>

        <div className="contact-right">
          <button className="contact-btn contact-mail" onClick={handleEmail}>
            <img className="contact-icon" src="/images/mail.png" alt="" />
          </button>

          <div>
            <h3>Mail</h3>
            <p>henry.yum1993@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
