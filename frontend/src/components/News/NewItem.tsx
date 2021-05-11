import React from "react";
import { Report } from "./News";

interface Props {
  news: Report;
}

const NewItem = ({ news }: Props) => {
  return (
    <div className="col-md-4 pt-4">
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <h1>{news.title}</h1>
          <button type="button" className="btn-close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <img src={news.url} alt="" />
        <p>{news.description}</p>
        <p>{news.createdAt}</p>
      </div>
    </div>
  );
};

export default NewItem;
