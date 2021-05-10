import React, { useEffect, useState } from "react";
import * as newsService from "./NewsService";
import NewItem from "./NewItem";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const res = await newsService.getNews();
    setNews(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div>
      {news.map((i) => {
        return <NewItem n={i} />;
      })}
    </div>
  );
};

export default NewsList;
