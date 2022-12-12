import GlobalStyle from "../styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { light_theme } from "../styles/themes/light";
import { dark_theme } from "../styles/themes/dark";

import { Header } from "../components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

function App() {
  return (
    <>
      <ThemeProvider theme={dark_theme}>
        <GlobalStyle />


        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
