import React from "react";
import profileImage from "../../assets/RDProfileImage.png";

function AboutMe() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img
        src={profileImage}
        className="my-2"
        style={{ width: "15%" }}
        alt="cover"
      />
    </section>
  );
}

export default AboutMe;
