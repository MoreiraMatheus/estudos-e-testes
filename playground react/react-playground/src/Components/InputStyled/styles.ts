import styled from "styled-components";

interface InputStyledProps {
  borderColor?: 'red' | 'black',
}

export const InputStyled = styled.input.attrs({
  type: "number",
  placeholder: "Meu input",
})<InputStyledProps>`
  border: 1px solid ${({borderColor})=>borderColor};
  padding: 8px;
  height: 30px;
`;
