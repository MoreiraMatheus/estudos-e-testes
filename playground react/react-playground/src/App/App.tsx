import { useState } from "react";

import GlobalStyle from "../styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { light_theme } from "../styles/themes/light";
import { dark_theme } from "../styles/themes/dark";

import { Button } from "../Components/Button/styles";
import { Box } from "../Components/Box/styles";
import { InputStyled } from '../Components/InputStyled/styles'

function App() {
  const [theme, setTheme] = useState(light_theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>
          <InputStyled borderColor="red"/>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
