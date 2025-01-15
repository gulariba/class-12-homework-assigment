import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="h-auto py-14 bg-white">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center text-[#212529]">
            Our Sponsors
          </h1>
          {/* Sponsors Image */}
          <div className="mt-10 flex justify-center">
            <Image
              src="/sponsors.png"
              alt="Our Sponsors"
              width={1000}
              height={81}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#043873] text-white py-10">
        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Logo and Description */}
          <ul className="text-center lg:text-left space-y-4 lg:w-1/4">
            <li>
              <Image
                src="/Logo.png"
                alt="logo"
                width={191}
                height={34}
                className="mx-auto lg:mx-0 w-[133.95px] h-[24px] md:w-[191px] md:h-[34px]"
              />
            </li>
            <li className="text-sm leading-6">
              &quot;Whitepace was created for the new ways we live and work. We make a better workspace around the world.&quot;
            </li>
          </ul>

          {/* Product Links */}
          <ul className="space-y-3 text-center lg:text-left lg:w-1/4">
            <li className="text-lg font-medium">Product</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>

          {/* Resources Links */}
          <ul className="space-y-3 text-center lg:text-left lg:w-1/4">
            <li className="text-lg font-medium">Resources</li>
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>

          {/* Company Links */}
          <ul className="space-y-3 text-center lg:text-left lg:w-1/4">
            <li className="text-lg font-medium">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <h5 className="text-sm">©2021 Whitepace LLC.</h5>
        </div>
      </section>
    </>
  );
};

export default Footer;
