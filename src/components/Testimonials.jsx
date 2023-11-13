import {
  testimonials_1,
  testimonials_2,
  testimonials_3,
} from "./../assets/testimonials";

import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section className="w-full py-20 prose max-w-none">
      <h1 className="mx-auto mt-10 text-4xl text-center">They love ShowRoom</h1>
      <div className="hidden-scrollbar px-10 flex lg:justify-center justify-start gap-10 mt-20  overflow-x-scroll max-w-full">
        <div className="min-w-[320px] w-[320px] md:min-w-[384px] md:w-[384px] bg-slate-100 p-10 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex ">
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
            </div>
            <h2>“Intuitive and user-friendly ”</h2>
            <p className="text-sm">
              ShowRoom.ai is a game-changer for car enthusiasts like me! The AI
              car background editor is incredibly intuitive and user-friendly.
              It's a must-have tool for anyone looking to showcase their ride in
              the best light possible.
            </p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <img src={testimonials_1} className="m-0" alt="" />
            <div>
              <h3 className="m-0">Ryan Adams</h3>
              <p className="m-0">Car enthusiast</p>
            </div>
          </div>
        </div>
        <div className="min-w-[320px] w-[320px] md:min-w-[384px] md:w-[384px] bg-slate-100 p-10 rounded-2xl flex flex-col justify-between">
          <div className="">
            <div className="flex ">
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
            </div>
            <h2>“A gem for car sellers. ”</h2>
            <p className="text-sm">
              I'm impressed with the level of sophistication ShowRoom.ai brings
              to the table. The AI-powered background editor is a true gem for
              car sellers. ShowRoom.ai has become my go-to tool for enhancing my
              business performance on a demanding market.
            </p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <img src={testimonials_2} className="m-0" alt="" />
            <div>
              <h3 className="m-0">Michael Sadi</h3>
              <p className="m-0">Car dealership CEO</p>
            </div>
          </div>
        </div>
        <div className="min-w-[320px] w-[320px] md:min-w-[384px] md:w-[384px] bg-slate-100 p-10 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex ">
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
              <AiFillStar size={27} color="#F1C644" />
            </div>
            <h2>“Effortless quality! ”</h2>
            <p className="text-sm">
              ShowRoom.ai has revolutionized the way I present my car photos
              online. The AI car background editor is a lifesaver for someone
              like me who doesn't have extensive photo editing skills. Kudos to
              ShowRoom.ai for creating a tool that enhances the visual appeal of
              my car photos effortlessly!
            </p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <img src={testimonials_3} className="m-0" alt="" />
            <div>
              <h3 className="m-0">Laura Emie</h3>
              <p className="m-0">Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <button className="bg-black text-white font-bold px-4 py-2 rounded-2xl ">
          Try myself
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
