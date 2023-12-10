import React from "react";

const About = () => {
  return (
    <div className="section1 text-text p-10 ">
      <h2 className="text-5xl font-heading  mb-8">
        About me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-1 xl:">
        <p className="text-text font-body md:px-4">
          Hello there! I'm Joel Wilson, a passionate and dedicated full stack
          developer with a flair for crafting robust and innovative web
          solutions. My journey in the world of technology began with a
          curiosity-driven exploration, and it has evolved into a fulfilling
          career where I constantly strive to merge creativity with
          functionality.
        </p>
        <p className="font-body md:px-4">
          Whether you have a specific project in mind or just want to explore
          the possibilities, I'm always up for a challenge. Let's collaborate
          and turn your ideas into reality. Feel free to reach out, and let's
          embark on a journey of innovation and creativity together. Thank you
          for visiting my portfolio, and I look forward to the opportunity of
          working with you!
        </p>
      </div>
    </div>
  );
};

export default About;
