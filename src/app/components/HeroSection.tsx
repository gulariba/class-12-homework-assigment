import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full bg-[#043873] flex flex-col-reverse lg:flex-row items-center px-4 lg:px-16 xl:px-32 py-10 lg:py-20 gap-10 lg:gap-0">
      {/* Left Section */}
      <div className="text-center lg:text-left max-w-md lg:max-w-lg xl:max-w-2xl">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
          Get More Done with Whitepace
        </h2>
        <p className="font-normal text-sm md:text-base lg:text-lg text-white mt-4 tracking-wide">
          {"Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks."}
        </p>
        <div className="mt-6">
          <Button btnText="Try Whitepace free →" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <div className="w-full h-64 md:h-80 lg:h-[549px] bg-[#C4DEFD] rounded-lg shadow-md"></div>
      </div>
    </section>
  );
};

export default Hero;