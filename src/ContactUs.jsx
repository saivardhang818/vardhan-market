import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending functionality or API call here

    // For now, let's log the form data
    console.log('Form submitted:', formData);
  };

  return (
    <section style={{
      padding: '50px 20px',
      backgroundColor: '#f3f1f0',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2rem', color: '#4f7893', marginBottom: '20px' }}>
        📞 Get in Touch with Us
      </h2>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '40px' }}>
        Have questions or need assistance? We're here to help!
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: '30px',
      }}>
        <div style={{
          width: '30%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '10px',
          textAlign: 'center',
        }}>
          <h3 style={{ color: '#4f7893', fontSize: '1.2rem', marginBottom: '10px' }}>📧 Email Us</h3>
          <p style={{ color: '#666', fontSize: '1rem' }}>support@mymarket.com</p>
        </div>

        <div style={{
          width: '30%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '10px',
          textAlign: 'center',
        }}>
          <h3 style={{ color: '#4f7893', fontSize: '1.2rem', marginBottom: '10px' }}>📞 Call Us</h3>
          <p style={{ color: '#666', fontSize: '1rem' }}>+91 9494948586</p>
        </div>

        <div style={{
          width: '30%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '10px',
          textAlign: 'center',
        }}>
          <h3 style={{ color: '#4f7893', fontSize: '1.2rem', marginBottom: '10px' }}>📍 Visit Us</h3>
          <p style={{ color: '#666', fontSize: '1rem' }}>123 Main Street, City, Country</p>
        </div>
      </div>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <h3 style={{ fontSize: '1.5rem', color: '#4f7893', marginBottom: '20px' }}>
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px 30px',
              backgroundColor: '#4f7893',
              color: 'white',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#54a6b7'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4f7893'}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
