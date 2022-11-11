import { useState } from 'react';

import { ThemeProvider } from 'styled-components'

import { Button } from '../Button/styles';
import { Box } from '../Box/styles'
import GlobalStyle from '../../styles/GlobalStyles'

import {light_theme} from '../../styles/themes/light'
import {dark_theme} from '../../styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light_theme)

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <main>
        <Box/>
        <Button 
          onClick={()=>{
            theme === light_theme ? setTheme(dark_theme): setTheme(light_theme)
          }}
        >
          Hello world
        </Button>
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;