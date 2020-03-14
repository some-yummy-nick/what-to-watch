import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/App/App.jsx";
import {films} from "./mocks/films";

const init = () => {
  ReactDOM.render(
      <App films={films}/>,
      document.getElementById(`root`)
  );
};

init();
