import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${Reset}
    * {
    box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    menu, ol, ul, li {
        list-style : none;
    }

    blockquote, q {
        quotes: none;
    }

    input, button {
        background-color: transparent;
        border : none;
        outline : none;
    }

    table {
        border-collapse : collapse;
        border-spacing: 0;
    }
`;

export default GlobalStyle;
