import { DefaultTheme, createGlobalStyle } from "styled-components";

export const Theme: DefaultTheme = {
  borderColor: "#bbb",
  borderRadius: "4px",
  color: "hsl(0, 0%, 7%)",
  fontFamilies: {
    lato: "lato, sans-serif; "
  },
  fontSize: "16px",
  printSize: "10pt",
  fontWeight: "400",
  maxWidth: "1000px",
  mobileWidth: "480px",
  orange: "hsl(14, 78%, 52%)",
  tfBlue: "hsl(205, 100%, 50%)",
  tfBlueHighlight: "hsl(205, 100%, 90%)",
  white: "hsl(0, 0%, 100%)"
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-weight: ${props => props.theme.fontWeight};
    line-height: 1.6;
    padding: 0 0 1px;
    @media screen {
      font-size: ${props => props.theme.fontSize};
    }
    @media print {
      font-size: ${props => props.theme.printSize};
    }
  }
  * {
    font-family: ${props => props.theme.fontFamilies.lato};
  }
`;
