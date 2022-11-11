import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({theme}) => theme.text};
  cursor: pointer;
  border: none;
  padding: 4px;
`