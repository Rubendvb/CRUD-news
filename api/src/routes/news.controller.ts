import { RequestHandler } from "express";
import News from "./News";

export const createNews: RequestHandler = async (req, res) => {
  const newsFound = await News.findOne({ url: req.body.url });

  if (newsFound) {
    return res.status(301).json({ message: "The url already exists" });
  }

  const news = new News(req.body);
  const savedNews = await news.save();
  res.json(savedNews);
};

export const getNews: RequestHandler = async (req, res) => {
  try {
    const news = await News.find();
    return res.json(news);
  } catch (error) {
    res.json(error);
  }
};

export const getANews: RequestHandler = async (req, res) => {
  const newsFound = await News.findById(req.params.id);

  if (!newsFound) {
    return res.status(200).json();
  }

  return res.json(newsFound);
};

export const deleteNews: RequestHandler = async (req, res) => {
  const newsFound = await News.findByIdAndDelete(req.params.id);

  if (!newsFound) {
    return res.status(200).json();
  }

  return res.json(newsFound);
};

export const updateNews: RequestHandler = async (req, res) => {
  const newsUpdated = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!newsUpdated) {
    return res.status(200).json();
  }

  res.json(newsUpdated);
};
