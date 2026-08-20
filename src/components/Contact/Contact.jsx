import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">

          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <p>
              Have questions about books, orders, or BookVerse? Send us a
              message and we'll be happy to help.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <h3>Email</h3>
                <p>support@bookverse.com</p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>

              <div className="contact-item">
                <h3>Address</h3>
                <p>Bangalore, Karnataka, India</p>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>

              <div className="contact-input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label>Your Message</label>

                <textarea
                  placeholder="Write your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`contact-submit-btn ${
                  submitted ? "submitted-btn" : ""
                }`}
                disabled={submitted}
              >
                {submitted ? "Message Sent Successfully! ✓" : "Send Message"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;