import axios from "axios";
import { deleteFileSvc, uploadFileSvc } from "./firebase.service";

export const makeRequest = async (
  /** @type {string} */ prompt,
  /** @type {any} */ image
) => {
  try {
    console.log(prompt, image);
    const imageUrl = await uploadFileSvc(image);
    console.log(imageUrl);
    const response = await axios.post("/realistic-background", {
      prompt: prompt,
      image: imageUrl,
    });
    console.log(imageUrl);
    deleteFileSvc(imageUrl.filename);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
