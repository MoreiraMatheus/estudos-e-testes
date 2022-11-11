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
  }
  
  main{
    height: 300px;
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`