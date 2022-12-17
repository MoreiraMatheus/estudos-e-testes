import GlobalStyle from "../styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { dark_theme } from "../styles/themes/dark";

import { StyledCard } from "../components/StyledCard";

function App() {
  return (
    <>
      <ThemeProvider theme={dark_theme}>
        <GlobalStyle />

        <StyledCard/>
      </ThemeProvider>
    </>
  ); 
}

export default App;
