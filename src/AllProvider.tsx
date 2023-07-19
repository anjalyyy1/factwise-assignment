import App from "App";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme.styles";
import GlobalStyle from "styles/globalStyles";

const AllProvider = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </>
  );
};

export default AllProvider;
