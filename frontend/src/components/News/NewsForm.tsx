import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Report } from "./News";
import * as newsService from "./NewsService";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router";

interface Params {
  id: string;
}

const NewsForm = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
    date: "",
  };

  const [news, setNews] = useState<Report>(initialState);

  const inputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await newsService.createNews(news);
      toast.success("Novo vídeo adicinado");
      setNews(initialState);
    } else {
      await newsService.updateNew(params.id, news);
    }

    history.push("/"); // ---> Quando finalizar a criação de uma noticia, retorna a home
  };

  const getNew = async (id: string) => {
    const res = await newsService.getNew(id);

    const { title, description, url, date } = res.data;
    setNews({ title, description, url, date });
  };

  useEffect(() => {
    if (params.id) {
      getNew(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nova Notícia</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Título da notícia"
                  className="form-control"
                  onChange={inputChange}
                  value={news.title}
                  autoFocus
                />
              </div>

              <div className="form-group pt-2">
                <input
                  type="text"
                  name="url"
                  placeholder="Imagen da notícia (url)"
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
                  placeholder="Conteúdo da Notícia"
                  onChange={inputChange}
                  value={news.description}
                ></textarea>
              </div>

              <div className="form-group pt-2">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={inputChange}
                  placeholder="05/12/1991"
                  value={news.date}
                />
              </div>

              {params.id ? (
                <button className="btn btn-danger mt-2">
                  Atualizar Notícia
                </button>
              ) : (
                <button className="btn btn-danger mt-2">Criar Notícia</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
