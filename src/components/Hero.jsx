import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col">
        <p className="uppercase text-green-300">Growing with data analytics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible, financing for
          </p>
          <div className="md:text-5xl sm:text-4xl text-xl font-bold pl-4">
            {" "}
            <Typewriter
              options={{
                strings: ["BTB", "BTC", "SASS"],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
        <p>
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms.
        </p>
      </div>
    </div>
  );
};

export default Hero;
