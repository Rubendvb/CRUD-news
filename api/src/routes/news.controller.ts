import { RequestHandler } from "express";

export const createNews: RequestHandler = (req, res) => {
  res.json("creating a news");
};

export const getNews: RequestHandler = (req, res) => {
  res.json("getting news");
};
export const getANews: RequestHandler = (req, res) => {
  res.json("getting a news");
};
export const deleteNews: RequestHandler = (req, res) => {
  res.json("deleting news");
};
export const updateNews: RequestHandler = (req, res) => {
  res.json("updating news");
};
