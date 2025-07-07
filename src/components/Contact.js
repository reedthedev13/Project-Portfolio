import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o03z6ci",
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
    <section id="contact" className="py-16 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
          {/* Contact Info */}
          <div className="md:w-1/2 text-gray-300 space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>
            <p>
              <i className="fas fa-envelope mr-2 text-teal-400"></i>
              lathropreed713@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-2 text-teal-400"></i>
              (314) 616-0168
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/reedthedev13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/reed-lathrop-3370b4359/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-600 text-xl transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>

            {submitted && (
              <div className="text-teal-400 font-medium text-sm mt-2">
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
