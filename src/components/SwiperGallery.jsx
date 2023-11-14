import { useEffect, useRef, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { scenes } from "./../assets/scenes";
import SceneCard from "./SceneCard";
const SceneList = ({ setScene, scene, user }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  //   const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 1280) {
        setSlidesPerView(2);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth >= 912) {
        setSlidesPerView(2);
      } else if (window.innerWidth >= 740) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call the function initially

    return () => {
      // cleanup - remove the listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="mt-auto flex w-10/12 lg:w-10/12 justify-center">
        <div className="relative mt-auto flex w-full items-center justify-center rounded-lg">
          <div ref={prevRef} className="">
            <AiFillCaretLeft
              size={42}
              className="text-accent-600 cursor-pointer"
            />
          </div>
          <div className="h-fit w-full">
            <Swiper
              key={"axz"}
              spaceBetween={10}
              slidesPerView={slidesPerView}
              className="h-full w-full"
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {scenes.map((item, key) => {
                return (
                  <>
                    <SwiperSlide
                      className="flex h-full items-center justify-center "
                      key={key}
                    >
                      <div onClick={() => setScene(key)} className="">
                        <SceneCard
                          name={item.name}
                          image={item.image}
                          key={key}
                          className={
                            scene === key ? "border-2 border-neutral-900" : ""
                          }
                          imageStyle={!user && "grayscale"}
                        />
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
          <div ref={nextRef}>
            <AiFillCaretRight
              size={42}
              className="text-accent-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SceneList;
