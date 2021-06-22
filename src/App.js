import React from "react";
import { css } from "@emotion/css";

const color = "white";

function App() {
  return (
    <h1
      className={css`
        background-color: black;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hello React!
    </h1>
  );
}

export default App;
