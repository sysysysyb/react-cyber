/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import normalize from "emotion-normalize";
import "@fontsource/noto-sans-kr";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${normalize}

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          font-family: "Noto Sans KR", sans-serif;
        }
      `}
    />
  );
};
