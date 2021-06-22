import React from "react";
import { css } from "@emotion/css";

export default function App() {
  return (
    <h1
      className={css`
        background-color: hotpink;
        &:hover {
          color: ${"darkgreen"};
        }
      `}
    >
      Hello React!
    </h1>
  );
}
