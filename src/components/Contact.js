import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ContactStyles from "../styles/contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgvywl7",
        "template_185wagv",
        formRef.current,
        "TLv86dt9Nn2KTEu1Q"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <i className="fas fa-envelope"></i> lathropreed713@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> (314) 616-0168
            </p>
            <div className="social-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
