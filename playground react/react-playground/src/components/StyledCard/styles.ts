import styled from "styled-components";

import { ArrowSquareOut } from "phosphor-react";

export const Container = styled.div`
  background-color: ${({theme})=>theme.cardBackground};
  border-radius: 16px;
  width: 300px;
  height: 400px;
  overflow: hidden;
  text-align: center;
`

export const StyledImage = styled.img`
  width: 100%;
`

export const NoteInStars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 4px;
  margin: 8px auto;
  border: 2px solid ${({theme})=>theme.bgColor};
  border-radius: 16px;
`

export const RecipeLinks = styled.div`
  width: 80%;
  margin: auto;
  text-align: left;

  li{
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  a{
    text-decoration: none;
    color: black;
    font-size: 1.5em;
  }
  a:hove{
    text-decoration: underline;
  }
`