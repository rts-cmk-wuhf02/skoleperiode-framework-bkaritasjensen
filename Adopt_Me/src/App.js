import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Ozzy",
      animal: "Dog",
      breed: "Pug",
    }),
    React.createElement(Pet, {
      name: "Tino",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "Girlbert th. 2",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
