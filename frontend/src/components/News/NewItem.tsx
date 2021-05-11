import React from "react";
import { Report } from "./News";
import { useHistory } from "react-router-dom";
import * as newsService from "./NewsService";

import "./NewItem.css";

interface Props {
  report: Report;
  loadNews: () => void;
}

const NewItem = ({ report }: Props) => {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await newsService.deleteNew(id);
  };

  return (
    <div className="col-md-4 pt-4">
      <div className="card card-body news-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${report._id}`)}>
            {report.title}
          </h1>
          <button
            type="button"
            className="btn-close"
            onClick={() => report._id && handleDelete(report._id)}
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
        <img src={report.url} alt="" />
        <p>{report.description}</p>
      </div>
    </div>
  );
};

export default NewItem;
