import axios from "axios";

export const getNews = async () => {
  return await axios.get("http://localhost:4000/noticias");
};
