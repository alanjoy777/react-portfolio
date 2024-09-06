import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id='contact' className="contact-container">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
