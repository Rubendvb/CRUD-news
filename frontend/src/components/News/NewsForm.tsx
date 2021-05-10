import React, { ChangeEvent, FormEvent, useState } from "react";
import { Report } from "./News";

const NewsForm = () => {
  const [news, setNews] = useState<Report>({
    title: "",
    description: "",
    url: "",
  });

  const inputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(news);
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nova Noticia</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Escreve o título da noticia"
                  className="form-control"
                  onChange={inputChange}
                  autoFocus
                />
              </div>

              <div className="form-group pt-2">
                <input
                  type="url"
                  name="url"
                  placeholder="https://google.com"
                  className="form-control"
                  onChange={inputChange}
                />
              </div>

              <div className="form-group pt-2">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Descrição do vídeo"
                  onChange={inputChange}
                ></textarea>
              </div>

              <button className="btn btn-danger mt-2">Criar Vídeo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
