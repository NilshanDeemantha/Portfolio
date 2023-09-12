import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Coder.", "Full Stack Developer.", "UI Designer.", "Software Engineer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO THE PROFILE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nilshan Deemantha</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a computer science undergraduate student at the University of Colombo School of Computing (UCSC), a software development enthusiast with abackground in both computer science and software engineering. 
        My journey in computer science began with a fascination for technology's ability to solve complex problems.
        As a hardworking individual who quickly adapts to newtechnologies, I am eager to improve my technical and professional skills both individually and in groups.
        Outside of coding, I enjoy hiking and volunteering at local coding events to inspire the next generation of tech enthusiasts.
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner