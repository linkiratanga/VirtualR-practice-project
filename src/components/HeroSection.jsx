import { useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const videos = [video1, video2];

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-20 lg:mx-26 items-center">
      <h1 className="text-4xl lg:text-7xl text-center tracking-wide">
        Virtual reality build tools{" "}
        <span className="bg-gradient-to-br from-orange-500 to-orange-900 text-transparent bg-clip-text ">
          {" "}
          for developers{" "}
        </span>
      </h1>
      <p className="text-lg text-center text-neutral-500">
        {" "}
        VirtualR One way to bridge to reality. It allows developers to work
        seamlessly with multi task at once without office space, VirtualR
        Headsets are portable and light. with 36 hours battery life time per
        just 30 seconds charge
      </p>
      <div className="flex justify-center pt-6 space-x-14">
        <a
          href="http://"
          className="px-4 py-2 rounded-md bg-gradient-to-br from-orange-400 to-orange-800"
        >
          Start for free
        </a>
        <a href="http://" className="px-4 py-2  border  rounded-md  ">
          Documentation
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-10 gap-4 lg:gap-10">
        {videos.map((cur) => {
          return (
            <video
              autoPlay
              loop
              muted
              className="w-full rounded-lg my-6 border border-orange-500 shadow-md shadow-orange-400/50"
            >
              <source src={cur} type="video/mp4" />
            </video>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
