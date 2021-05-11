import axios from "axios";
import { Report } from "./News";

const api = "http://localhost:4000";

export const getNews = async () => {
  return await axios.get<Report[]>(`${api}/noticias`);
};

export const createNews = async (news: Report) => {
  return await axios.post(`${api}/noticias`, news);
};
