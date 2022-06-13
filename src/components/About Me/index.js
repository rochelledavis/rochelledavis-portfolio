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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare
        dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus.
        Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin
        nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo
        vel turpis sollicitudin, et tristique velit convallis. In hac habitasse
        platea dictumst. Phasellus mattis nunc sed orci consequat laoreet.
        Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac
        habitasse platea dictumst.
      </p>
    </section>
  );
}

export default AboutMe;
