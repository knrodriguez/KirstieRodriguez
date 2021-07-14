import axios from "axios";

export const getMedia = async () => {
  try {
    const { data } = await axios.get("/api/tv-and-movies");
    return data;
  } catch (error) {
    console.log(error);
  }
};
