import { Container, StyledImage, NoteInStars, RecipeLinks } from "./styles";

import { Star, ArrowSquareOut } from "phosphor-react";
import { dark_theme } from "../../styles/themes/dark";

export function StyledCard() {
  return (
    <Container>
      <StyledImage
        src="https://comidinhasdochef.com/wp-content/uploads/2018/11/torta-de-frango-de-liquidificador.jpg"
        alt="torta de frango"
      />
      <h1>Torta de frango</h1>

      <NoteInStars>
        <Star color="yellow" size={30} weight="fill" />
        <Star color="yellow" size={30} weight="fill" />
        <Star color="yellow" size={30} weight="fill" />
        <Star color="yellow" size={30} weight="fill" />
        <Star color="yellow" size={30} weight="fill" />
      </NoteInStars>

      <RecipeLinks>
        <ul>
          <li>
            <a href="#">Receita</a>
            <ArrowSquareOut weight="bold"/>
          </li>
          <li>
            <a href="#">Comentários</a>
            <ArrowSquareOut weight="bold"/>
          </li>
          <li>
            <a href="#">Perfil do chefe</a>
            <ArrowSquareOut weight="bold"/>
          </li>
        </ul>
      </RecipeLinks>
    </Container>
  );
}
