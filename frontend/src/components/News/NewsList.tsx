import React, { useEffect, useState } from "react";
import * as newsService from "./NewsService";
import NewItem from "./NewItem";
import { Report } from "./News";

const NewsList = () => {
  const [news, setNews] = useState<Report[]>([]);

  const loadNews = async () => {
    const res = await newsService.getNews();

    const formated = res.data
      .map((news) => {
        return {
          ...news,
          createdAt: news.createdAt ? new Date(news.createdAt) : new Date(),
          updateAt: news.updateAt ? new Date(news.updateAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setNews(formated);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="row">
      {news.map((news) => {
        return <NewItem report={news} key={news._id} loadNews={loadNews} />;
      })}
    </div>
  );
};

export default NewsList;
