import axios from "axios";
import { Report } from "./News";

const api = "http://localhost:4000";

export const getNews = async () => {
  return await axios.get<Report[]>(`${api}/noticias`);
};

export const createNews = async (news: Report) => {
  return await axios.post(`${api}/noticias`, news);
};

export const getNew = async (id: string) => {
  return await axios.get<Report>(`${api}/noticias/${id}`);
};

export const updateNew = async (id: string, report: Report) => {
  return await axios.put<Report>(`${api}/noticias/${id}`, report);
};

export const deleteNew = async (id: string) => {
  return await axios.delete<Report>(`${api}/noticias/${id}`);
};
