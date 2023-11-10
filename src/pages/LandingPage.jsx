import AppSection from "./../components/AppSection";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <section className="hero_section h-screen -mt-20 z-0 pt-44 prose max-w-none px-20">
        <h1 className="text-8xl font-medium">
          Your perfect car <br /> picture in a{" "}
          <span className="text-[#00d1ff] italic font-normal leading-relaxed">
            click
          </span>
        </h1>
      </section>
      <AppSection />
    </>
  );
};

export default LandingPage;
