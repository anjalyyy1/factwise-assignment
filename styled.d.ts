import theme from "./src/styles/theme.styles";
import {} from "styled-components";

export type ThemeInterface = typeof theme;

// defining types for styled components
declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
