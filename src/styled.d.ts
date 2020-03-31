// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderColor: string;
    borderRadius: string;
    color: string;
    fontFamilies: {
      lato: string;
    };
    fontSize: string;
    printSize: string;
    fontWeight: string;
    maxWidth: string;
    mobileWidth: string;
    orange: string;
    tfBlue: string;
    tfBlueHighlight: string;
    white: string;
  }
}
