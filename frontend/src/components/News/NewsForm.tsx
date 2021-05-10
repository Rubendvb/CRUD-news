import React, { ChangeEvent, FormEvent, useState } from "react";
import { Report } from "./News";
import * as newsService from "./NewsService";
import { toast } from "react-toastify";
// import { useHistory } from "react-router";

const NewsForm = () => {
  // const history = useHistory();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [news, setNews] = useState<Report>(initialState);

  const inputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await newsService.createNews(news);
    toast.success("Novo vídeo adicinado");
    setNews(initialState);
    // history.push("/"); ---> Quando finalizar a criação de uma noticia, retorna a home
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
                  value={news.title}
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
                  value={news.url}
                />
              </div>

              <div className="form-group pt-2">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Descrição do vídeo"
                  onChange={inputChange}
                  value={news.description}
                ></textarea>
              </div>

              <button className="btn btn-danger mt-2">Criar Noticia</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
