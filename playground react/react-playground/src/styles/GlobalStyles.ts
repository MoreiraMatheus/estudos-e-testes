import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }
`