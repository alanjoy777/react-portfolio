import React from 'react';
import './skils.css';

function Skills() {
  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
    { name: "GSAP", icon: "fas fa-bolt", color: "#88CE02" },
    { name: "Angular", icon: "fab fa-angular", color: "#DD0031" },
    { name: "MongoDB", icon: "fas fa-database", color: "#47A248" }
  ];

  return (
    <div id='skilsss' className="container text-center my-5">
      <h2 className="mb-4">My Skills</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="skill-card p-4">
              <i className={`${skill.icon} fa-3x`} style={{ color: skill.color }}></i>
              <h4 className="mt-3">{skill.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
