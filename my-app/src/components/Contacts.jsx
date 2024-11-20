import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your backend email functionality here
    setStatus('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contacts">
      <h1 className="contacts-title">Contact Me</h1>
      <p className="contacts-description">
        Feel free to reach out to me via this form or the contact details below.
      </p>

      <div className="contacts-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>

        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>Email: mtyelwal1@.com</p>
          <p>Phone: 0769+707707</p>
          <p>Location:Cape Town South Africa</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
