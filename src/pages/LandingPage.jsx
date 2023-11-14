import Testimonials from "./../components/Testimonials";
import AppSection from "./../components/AppSection";

import Footer from "./../components/Footer";

const LandingPage = () => {
  const scrollToSection = () => {
    const section = document.getElementById("app-section");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="relative hero_section h-screen  z-0 flex lg:block items-center lg:pt-44 prose max-w-none md:px-10  lg:px-20">
        <div className="z-10 flex lg:absolute lg:block  flex-col items-center mx-auto px-10">
          <h1 className=" text-4xl md:text-7xl lg:text-8xl max-w-4xl font-extrabold text-white leading-none mb-5 text-center lg:text-left">
            Your perfect car <br /> picture in a
            <span className="text-[#00d1ff] italic font-bold ">click</span>
          </h1>
          <p className="text-slate-100 text-sm lg:text-4xl md:max-w-2xl text-center lg:text-left">
            Create astonishing scenes for your car picture with the most
            powerful tools
          </p>
          <button
            className="bg-[#00d1ff] px-4 w-32 md:w-56 font-bold text-white py-2 md:py-3 rounded-2xl text-base md:text-xl"
            onClick={scrollToSection}
          >
            Generate
          </button>
        </div>
        <div className="bg-black w-full h-full opacity-50 absolute top-0 left-0 z-0" />
      </section>
      <Testimonials />
      <AppSection />
    </>
  );
};

export default LandingPage;
