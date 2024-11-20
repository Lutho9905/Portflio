import React from "react";
import "./Certificates.css";

const CertificateCard = ({ title, issuer, date, image, pdf }) => (
  <div className="certificate-card">
    {image && <img src={image} alt={`${title} certificate`} className="certificate-image" />}
    <svg
      className="certificate-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 15l-2 4-2-4H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-4l-2 4-2-4z" />
    </svg>
    <h3>{title}</h3>
    <p className="certificate-issuer">{issuer}</p>
    <p className="certificate-date">{date}</p>
    {pdf && (
      <a href={pdf} target="_blank" rel="noopener noreferrer" className="certificate-download">
        Download Certificate
      </a>
    )}
  </div>
);

const CertificatesPortfolio = () => {
  const certificates = [
    { 
      title: "Diploma (Software Development)", 
      issuer: "Nelson Mandela University", 
      date: "April 2024", 
      pdf: "/pdfs/Completion Letter.pdf" 
    },
    { 
      title: "Full Stack Web Development", 
      issuer: "Capaciti", 
      date: "November 2024",  
      pdf: "/pdfs/Fullstack.pdf"
    },
    { 
      title: "Java", 
      issuer: "Capaciti", 
      date: "November 2024" ,
      pdf: "pdfs/Java.pdf"
    },
    { 
      title: "React.js Advanced Concepts", 
      issuer: "Capaciti", 
      date: "October 2024", 
      pdf: "pdfs/React JS.pdf"
       
    },
    { 
      title: "Python", 
      issuer: "Capaciti", 

      pdf: "pdfs/Python.pdf"  
    },
   
    { 
      title: "Introduction Networks", 
      issuer: "Cisco", 
      date: "December 2021", 
 
      pdf: "/pdfs/CCNA-_Introduction_to_Networks_certificate.pdf"
    },
    { 
      title: "Introduction Cyber Security", 
      issuer: "Cisco", 
      date: "June 2021" ,
 
      pdf:"pdfs/Introduction_to_Cybersecurity_certificate.pdf",
     
    },
    { 
      title: "JavaScript.js and Node.js", 
      issuer: "Capaciti", 
      date: "November 2024",
      pdf: "" 
    },
    { 
      title: "HTML & CSS", 
      issuer: "Capaciti", 
      date: "September 2024" ,
      pdf: ""
    },
    
  ];

  return (
    <div>
      <h1>My Certificates</h1>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            image={cert.image}
            pdf={cert.pdf}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesPortfolio;
