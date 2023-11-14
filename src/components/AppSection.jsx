import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import SceneList from "./SwiperGallery";
import { makeRequest } from "./../services/replicate.service";
import { scenes } from "./../assets/scenes";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { isMobile } from "react-device-detect";
import SceneCard from "./SceneCard";
import { useDispatch, useSelector } from "react-redux";
import { decrementToken } from "./../features/auth.features";

const AppSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [scene, setScene] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // dropzone
  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    const url = URL.createObjectURL(acceptedFiles[0]);
    setImageUrl(url);
  }, []);
  const onDropRejected = useCallback((fileRejections) => {
    fileRejections.forEach((fileRejection) => {
      fileRejection.errors.forEach((error) => {
        if (error.code === "file-too-large") {
          alert(`Error: ${error.message}`);
        }
      });
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    // accept: {
    //   "application/images": [],
    // },
    minSize: 0,
    maxSize: 1.5 * 1024 * 1024,
    maxFiles: 1,
  });
  const handleSubmit = async () => {
    setIsLoading(true);
    if (user && access.credits === 0) return;
    const result = await makeRequest(
      `A car in a ${scenes[scene].prompt}, commercial photoshoot`,
      image
    );
    setIsLoading(false);
    navigate(`/result?image=${encodeURIComponent(result.image)}`);
    if (user && access.credits > 0) dispatch(decrementToken());
  };
  // access control
  // @ts-ignore
  const user = useSelector((state) => state.auth_asdJ4Kh2a.user);
  // @ts-ignore
  const access = useSelector((state) => state.auth_asdJ4Kh2a.access);
  return (
    <>
      {/* <LoadingScreen isLoading={isLoading} /> */}
      {isLoading ? (
        <div className="h-full min-h-screen w-full justify-center flex items-center">
          <div className="flex h-full flex-col gap-8 justify-center items-center relative">
            <span className="font-extrabold text-5xl text-gray-800">
              Processing...
            </span>
            <PuffLoader color="#00D1FF" />
          </div>
        </div>
      ) : (
        <div
          className="w-full bg-white prose max-w-none py-10 md:py-10 flex flex-col items-center h-fit px-10"
          id="app-section"
        >
          <h1 className="mx-auto text-lg md:text-4xl">
            <span className="font-light text-center"> step 1 : </span> Upload
            your car picture{" "}
          </h1>
          <div
            {...getRootProps()}
            className={`w-full md:w-10/12 lg:w-6/12 aspect-w-10 aspect-h-8  md:aspect-h-4 lg:aspect-h-2 mx-auto rounded-md overflow-hidden ${
              user
                ? !image && "border-dashed border-2 border-[#00D1FF]"
                : "bg-neutral-100 border-dashed border-2 border-neutral-500"
            }`}
          >
            <input {...getInputProps({ disabled: user ? false : true })} />
            {image ? (
              <div className="w-full h-full">
                <img
                  src={imageUrl}
                  alt=""
                  className="m-0 w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className=" h-full flex justify-center items-center flex-col">
                <p className={`font-semibold px-8 py-4`}>Upload an image</p>
                <p className={``}>... or Drag 'n' drop an image</p>
              </div>
            )}
          </div>
          <h1 className="mx-auto mt-10 md:mt-20 text-lg md:text-4xl">
            <span className="font-light"> step 2 : </span> Select a style
          </h1>
          {isMobile ? (
            <div className="max-h-[598px] overflow-y-scroll flex flex-col gap-2">
              {scenes.map((item, key) => {
                return (
                  <div onClick={() => setScene(key)} className="" key={key}>
                    <SceneCard
                      name={item.name}
                      image={item.image}
                      key={key}
                      className={`${
                        scene === key ? "border-2 border-neutral-900" : ""
                      } `}
                      imageStyle={!user && "grayscale"}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <SceneList setScene={setScene} scene={scene} user={user} />
          )}
          {user ? (
            <>
              {access && access.credits === 0 ? (
                <span className="font-bold text-red-500 mt-10">
                  You are running out of credits , please upgrade your plan !
                </span>
              ) : (
                <button
                  className={`
            ${
              !(user && image && scene !== null && scene !== undefined)
                ? "bg-neutral-200 text-neutral-500"
                : "bg-neutral-950 text-white"
            }
               w-36 rounded-2xl font-extrabold  py-2 mt-10`}
                  onClick={handleSubmit}
                  disabled={
                    !(user && image && scene !== null && scene !== undefined)
                  }
                >
                  Generate
                </button>
              )}
            </>
          ) : (
            <p className="font-bold text-red-500 mt-10">
              Please sign in first to use this app{" "}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default AppSection;
