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
        max-width: 1120px;
        margin: 0 auto;
    }

    @media (min-width: 1440px) {
        #root {
            width: 1440px;
            margin: 0 auto;
        }
    }

    @media (max-width: 1180px) {
        .container {
            max-width: 90%;
        }
    }
`;