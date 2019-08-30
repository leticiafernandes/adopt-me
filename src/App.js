import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Cocker Spainel"
    }),
    React.createElement(Pet, {
      name: "Nero",
      animal: "Dog",
      breed: "Pug"
    }),
    React.createElement(Pet, {
      name: "Phoebe",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
