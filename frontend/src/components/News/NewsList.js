import React, { useEffect, useState } from "react";
import * as newService from "./NewService";

export const NewsList = () => {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const res = await newService.getNews();
    setNews(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div>
      {news.map((i) => (
        <div>
          <h1>{i.title}</h1>
          <p>{i.description}</p>
        </div>
      ))}
    </div>
  );
};
