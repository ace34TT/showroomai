import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import SwiperGallery from "./SwiperGallery";

const AppSection = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
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
  return (
    <>
      <div className="w-full bg-white prose max-w-none py-28 flex flex-col items-center">
        <h1 className="mx-auto">
          <span className="font-light"> step 1 : </span> Upload your car picture{" "}
        </h1>
        <div
          {...getRootProps()}
          className={`w-6/12 aspect-w-8 aspect-h-2 mx-auto ${
            !image && `border-dashed border-2 border-[#00D1FF] `
          }  rounded-md overflow-hidden `}
        >
          <input {...getInputProps({ disabled: false })} />
          {image ? (
            <img
              src={imageUrl}
              alt=""
              className="m-0 w-full h-auto object-cover"
            />
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
        <h1 className="mx-auto mt-20">
          <span className="font-light"> step 2 : </span> Select a style
        </h1>
        <SwiperGallery />
      </div>
    </>
  );
};

export default AppSection;
