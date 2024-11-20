import React from 'react';
import './Services.css'; // Import CSS file for styling

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Front-end development (HTML, CSS, JavaScript), Back-end development(Node.js, Python, Java, ASP.Net Core,Full-stack development)",
      icon: "🌐",
    },
    {
      title: "Software Engineering:",
      description: "Software architecture and design algorithm development and optimization Database design and management Testing and quality assurance",
      icon: "🎨",
    },
    {
      title: "Team Player",
      description: "Collaboration: Working effectively with others, sharing ideas, and respecting diverse perspectives. Communication: Expressing thoughts clearly, actively listening, and providing constructive feedback. ",

      icon: "🔍",
    },
  ];

  return (
    <div className="services">
      <h1 className="services-title">My Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
