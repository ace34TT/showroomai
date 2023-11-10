import { saveAs } from "file-saver";
import { AiFillSave } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

const Result = () => {
  const [searchParams] = useSearchParams();
  const image = searchParams.get("image");

  const downloadImage = async (/** @type {string} */ imageUrl) => {
    saveAs(
      `https://replicate-srxa.onrender.com/download?url=${encodeURIComponent(
        imageUrl
      )}`,
      "image.png"
    );
  };
  return (
    <div className="relative w-10/12 mx-auto max-h-screen h-screen flex flex-col justify-center items-center py-12">
      <img
        src={decodeURIComponent(image)}
        alt=""
        className="object-cover w-full h-full rounded-3xl overflow-hidden"
      />
      <button
        className="flex w-12 h-12 absolute bottom-16 right-4 items-center justify-center bg-slate-100 gap-4 rounded-full"
        onClick={() => downloadImage(image)}
      >
        <AiFillSave size={24} />
      </button>
    </div>
  );
};

export default Result;
