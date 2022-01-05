import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import UseState1 from "./UseState/1_Intro";
import UseState2 from "./UseState/2_EquivalentClassExample";
import UseEffect from "./UseEffect/1_Intro";
import UsingClass from "./UseEffect/2_UsingClass";
import WithCleanUpClass from "./UseEffect/3_WithCleanUpClass";
import WithCleanUp from "./UseEffect/4_WithCleanUp";
import Comment from "./ComponentAndProps/Comment";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Comment />
  </StrictMode>,
  rootElement
);
