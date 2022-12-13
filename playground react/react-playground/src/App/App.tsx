import GlobalStyle from "../styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { light_theme } from "../styles/themes/light";
import { dark_theme } from "../styles/themes/dark";

import { Header } from "../components/Header/Header";
import { MainRoutes } from "../pages/routes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={dark_theme}>
        <GlobalStyle />

        <Router>
          <MainRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
