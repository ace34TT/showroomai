import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import SceneList from "./SwiperGallery";
import { makeRequest } from "./../services/replicate.service";
import { scenes } from "./../assets/scenes";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { isMobile } from "react-device-detect";
import SceneCard from "./SceneCard";

const AppSection = () => {
  const navigate = useNavigate();
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
    const result = await makeRequest(
      `A car in a ${scenes[scene].prompt}, commercial photoshoot`,
      image
    );
    setIsLoading(false);
    navigate(`/result?image=${encodeURIComponent(result.image)}`);
  };
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
          className="w-full bg-white prose max-w-none py-10 md:py-28 flex flex-col items-center h-fit px-10"
          id="app-section"
        >
          <h1 className="mx-auto text-lg md:text-4xl">
            <span className="font-light text-center"> step 1 : </span> Upload
            your car picture{" "}
          </h1>
          <div
            {...getRootProps()}
            className={`w-full md:w-10/12 lg:w-6/12 aspect-w-10 aspect-h-8  md:aspect-h-4 lg:aspect-h-2 mx-auto ${
              !image && `border-dashed border-2 border-[#00D1FF] `
            }  rounded-md overflow-hidden cursor-pointer`}
          >
            <input {...getInputProps({ disabled: false })} />
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
                <button
                  className={`font-semibold px-8 py-4`}
                  type="button"
                  disabled={false}
                >
                  Upload an image
                </button>
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
                      className={
                        scene === key ? "border-2 border-neutral-900" : ""
                      }
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <SceneList setScene={setScene} scene={scene} />
          )}

          <button
            className="bg-neutral-950 w-36 rounded-2xl font-extrabold text-white py-4 mt-10"
            onClick={handleSubmit}
            // disabled={image && scene}
          >
            Generate
          </button>
        </div>
      )}
    </>
  );
};

export default AppSection;
