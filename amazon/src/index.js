import React from "react";
import React_Dom from "react-dom";
import App from "../src/Components/App";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";

React_Dom.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
