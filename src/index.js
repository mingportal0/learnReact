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
import Clock from "./StateAndLifecycle/Clock";
import Toggle from "./Event/Toggle";
import PleaseSignUp from "./ConditionalRender/1_PleaseSignUp";
import ShortExpression1 from "./ConditionalRender/2_ShortExpression1";
import ShortExpression2 from "./ConditionalRender/3_ShortExpression2";
import PreventRendering from "./ConditionalRender/4_PreventRendering";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <PreventRendering />
  </StrictMode>,
  rootElement
);

// function tick(){
//   ReactDOM.render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>,
//     rootElement
//   );
// }
// setInterval(tick, 1000);
