import React from "react";
import { render } from "react-dom";
/* import Pet from "./Pet"; */
import SearchParams from "./SearchParams";

const App = () => {
  /* return React.createElement("div", {}, [
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
  ]); */

  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
        {/*       <Pet name="Ozzy" animal="Dog" breed="Pug" />
      <Pet name="Tino" animal="Dog" breed="Labrador" />
      <Pet name="Girlbert th. 2" animal="Cat" breed="Mix" /> */}
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
