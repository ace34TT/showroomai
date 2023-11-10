import { PuffLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="top-0 left-0 fixed flex items-center justify-center bg-white h-screen w-screen z-50">
          <div className="flex h-full flex-col gap-8 justify-center items-center relative">
            <span className="font-extrabold text-5xl text-gray-800">
              showroom <span className="text-[#00d1ff]">ai</span>
            </span>
            <PuffLoader color="#00D1FF" />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
