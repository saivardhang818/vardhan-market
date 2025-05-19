import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const dateTimeInput = document.createElement('input');
    dateTimeInput.type = 'hidden';
    dateTimeInput.name = 'date_time';
    dateTimeInput.value = new Date().toLocaleString();
    form.current.appendChild(dateTimeInput);

    emailjs.sendForm(
      'service_i3t0kvh',
      'template_b9s5dgr',
      form.current,
      'gimfEfjaE6hdhlA1x'
    )
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send the message. Try again later.');
        console.error(error);
      });
  };

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '2rem',
      backgroundColor: '#f3f1f0',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      borderRadius: '12px',
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      maxWidth: '1200px',
      margin: '2rem auto',
    },
    left: {
      flex: '1',
      paddingRight: '2rem',
      minWidth: '300px',
    },
    right: {
      flex: '1',
      paddingLeft: '2rem',
      minWidth: '300px',
    },
    heading: {
      color: '#4f7893',
      marginBottom: '1rem',
    },
    paragraph: {
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
    },
    iconRed: {
      color: '#c69055',
      marginRight: '0.5rem',
    },
    iconGreen: {
      color: '#a5b899',
      marginRight: '0.5rem',
    },
    followTitle: {
      marginTop: '2rem',
      marginBottom: '1rem',
      fontSize: '1.1rem',
      fontWeight: 'bold',
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
      fontSize: '1.5rem',
    },
    socialIcon: {
      cursor: 'pointer',
      color: '#4f7893',
      transition: 'color 0.3s',
    },
    map: {
      marginTop: '1.5rem',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    },
    input: {
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    textarea: {
      padding: '0.75rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#54a6b7',
      color: 'white',
      padding: '0.75rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2 style={styles.heading}>Get in Touch</h2>
        <p style={styles.paragraph}><FaEnvelope style={styles.iconRed} /> <strong>Email:</strong>saivardhang818@gmail.com</p>
        <p style={styles.paragraph}><FaPhone style={styles.iconGreen} /> <strong>Phone:</strong>9494948586</p>
        <p style={styles.paragraph}><FaMapMarkerAlt style={styles.iconRed} /> <strong>Address:</strong> Singupuram, Srikakulam, AndhraPradesh</p>

        <h3 style={styles.followTitle}>Follow Us</h3>
        <div style={styles.socialIcons}>
          <FaFacebook style={styles.socialIcon} />
          <FaInstagram style={styles.socialIcon} />
          <FaTwitter style={styles.socialIcon} />
        </div>

        <div style={styles.map}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.6239482609344!2d78.3935950751681!3d17.525455783385404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMxJzMxLjYiTiA3OMKwMjMnNDYuMiJF!5e0!3m2!1sen!2sin!4v1747533689591!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div style={styles.right}>
        <h2 style={styles.heading}>Send Us a Message</h2>
        <form ref={form} onSubmit={sendEmail} style={styles.form}>
          <input type="text" name="from_name" placeholder="Enter your name" required style={styles.input} />
          <input type="email" name="from_email" placeholder="Enter your email" required style={styles.input} />
          <textarea name="message" rows="5" placeholder="Your message" required style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
