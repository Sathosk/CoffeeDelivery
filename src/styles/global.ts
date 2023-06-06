import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, button {
        all: unset;
        cursor: pointer;
    }

    .container {
        width: 80%;
        margin: 0 auto;
    }
`;