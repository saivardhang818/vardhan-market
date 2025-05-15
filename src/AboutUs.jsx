import React from 'react';

function AboutUs() {
  return (
    <>
      <style>{`
        .about-container {
          padding: 60px 30px;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background-color: #f3f1f0;
          max-width: 960px;
          margin: 0 auto;
          line-height: 1.8;
          color: #3e2c23;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .about-heading {
          font-size: 38px;
          text-align: center;
          color:rgb(0, 5, 7);
          margin-bottom: 10px;
          text-transform: uppercase;
          font-weight: 800;
        }

        .about-subheading {
          font-size: 18px;
          text-align: center;
          margin-bottom: 40px;
          color: #6b4f3b;
        }

        .section {
          background: linear-gradient(135deg,rgb(115, 100, 84),rgb(131, 126, 86));
          padding: 24px;
          border-radius: 14px;
          margin-bottom: 30px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          color: #fff;
        }

        .section h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: #fff;
        }

        .section ul {
          padding-left: 20px;
        }

        .section li {
          margin-bottom: 8px;
        }

        .section strong {
          color: #fff;
        }

        .contact-line {
          margin: 6px 0;
        }

        .icon {
          margin-right: 6px;
          font-weight: bold;
        }
      `}</style>

      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-subheading">
          Passionate Java developer and frontend enthusiast with hands-on experience in building scalable web applications.
        </p>

        <div className="section">
          <h3>👨‍💻 Profile Summary</h3>
          <ul>
            <li>✅ Strong knowledge of Java, OOP, and backend development using Spring Boot.</li>
            <li>🎨 Skilled in HTML, CSS, JavaScript, ReactJS & Bootstrap for frontend interfaces.</li>
            <li>🗃️ Oracle PL/SQL experience with CRUD & database management.</li>
            <li>⚡ Fast learner with good debugging, problem-solving, and time management skills.</li>
            <li>🤝 Excellent team collaboration and communication skills.</li>
          </ul>
        </div>

        <div className="section">
          <h3>📁 Projects</h3>
          <ul>
            <li><strong>Food Purchasing Site:</strong> React-based SPA with login, cart, discount logic.</li>
            <li><strong>Product Management App:</strong> Spring Boot + Oracle CRUD system.</li>
          </ul>
        </div>

        <div className="section">
          <h3>🎓 Education</h3>
          <ul>
            <li><strong>B.Tech in ECE</strong> – GMR Institute of Technology (2024) – 78%</li>
            <li><strong>HSC</strong> – Gayathri Jr College (2020) – 88%</li>
            <li><strong>SSC</strong> – Gayathri Model School (2018) – 10 GPA</li>
          </ul>
        </div>

        <div className="section">
          <h3>📞 Contact Info</h3>
          <p className="contact-line"><span className="icon">📧</span><strong>Email:</strong> saivardhang818@gmail.com</p>
          <p className="contact-line"><span className="icon">📱</span><strong>Phone:</strong> +91 94949 48586</p>
          <p className="contact-line"><span className="icon">🌍</span><strong>Location:</strong> Srikakulam, Andhra Pradesh</p>
          <p className="contact-line"><span className="icon">🗣️</span><strong>Languages:</strong> Telugu, English</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
