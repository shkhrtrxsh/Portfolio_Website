import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a Full Stack Developer with two months of industry experience in MERN stack, I bring extensive experience in crafting dynamic and scalable Full Stack websites. I am well-versed in modern web development technologies and have a deep understanding of Data Structures and Algorithms, with a competitive programming background. I am confident in my ability to turn complex ideas into compelling, user-friendly digital experiences.
        </p>

        <br />

        <p className="text-xl">
          
        </p>
      </div>
    </div>
  );
};

export default About;