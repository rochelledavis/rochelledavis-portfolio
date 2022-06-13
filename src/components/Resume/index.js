import React from "react";

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        View my resume
        <span>
          <a href="https://docs.google.com/document/d/1i65BZS0XszMR7Zy2-OH0Ddkxxc40POWCPAcJndk7Mvg/edit?usp=sharing">
            here
          </a>
        </span>
      </p>
      <h4>Front-end Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>APIs</li>
      </ul>
      <h4>Back-end Proficiencies</h4>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>React</li>
        <li>MERN</li>
      </ul>
    </div>
  );
}

export default Resume;
