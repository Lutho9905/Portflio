import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "High School",
      institution: "Nozuko Senior Secondary School ",
      year: "2014 - 2017",
      description: "Majored in Mathematics, Physical Sciences, Geography and Life sciences.",
    },
    {
      degree: "Software Development",
      institution: "Nelson Mandela University",
      year: "2021 - 2023",
      description: "Focused on Software Development, Algorithms, and Data Structures, Database Management System(DBMS) .",
    },
    {
      degree: "Full Stack Development",
      institution: "Capaciti",
      year: "2024-Present",
      description: "Focused on Software Development, Algorithms, and Data Structures",
     
    },
  ];

  return (
    <div className="education-page">
      <h1>My Education Journey</h1>
      <ul className="education-list">
        {educationData.map((item, index) => (
          <li key={index} className="education-item">
            <h2>{item.degree}</h2>
            <h3>{item.institution}</h3>
            <p>{item.year}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
