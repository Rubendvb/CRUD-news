import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewsList from "./components/News/NewsList";
import NewsForm from "./components/News/NewsForm";
import Navbar from "./components/Navbar/Navbar";

import "bootswatch/dist/simplex/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={NewsList} />
          <Route path="/new-news" component={NewsForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
