import React from 'react';
import "../app/styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-heading" data-aos="zoom-in-up">About Me</h2>
      {/* Fixed unescaped characters using &apos; */}
      <p className="about-text" data-aos="zoom-in-up">
        I am currently a dedicated student at GIAIC, where I am pursuing an intensive course in Artificial Intelligence, Web 3.0, and the Metaverse. My journey is driven by a profound passion for technology and an unwavering curiosity to explore the limitless possibilities it offers. With a strong belief in continuous learning, I strive to stay ahead in this fast-evolving digital age by acquiring new skills and diving deep into cutting-edge innovations. Whether it&apos;s understanding the complexities of AI, exploring the decentralized world of Web 3.0, or envisioning the boundless potential of the Metaverse, I am committed to broadening my knowledge and honing my expertise. My goal is to not only excel academically but also to contribute meaningfully to the technological advancements shaping the future.
      </p>
    </div>
  );
};

export default About;
