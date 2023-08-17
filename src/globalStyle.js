import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.main};
    padding: 20px;
    margin: 20px;
    border: 1px dashed #504834;
}

li {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    mix-blend-mode: luminosity;
    filter: brightness(100%);

    &:hover {
        mix-blend-mode: normal
    }
}

h1 {
    font-family: ${(props) => props.theme.fonts.main}
}

h5 {
    font-family: ${(props) => props.theme.fonts.normal}
}
`;

export default GlobalStyle;