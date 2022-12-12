import { Link } from "react-router-dom";

import { StyledLink } from "./style";

export function Header() {
  return (
    <>
      {/* entender pq esse miserável não aceita perder o underline */}
      <Link to="/">
        <StyledLink>
          Home
        </StyledLink>
      </Link>

      <Link to="/contact">
        <StyledLink>Contato</StyledLink>
      </Link>

      <Link to="/login">
        <StyledLink>Login</StyledLink>
      </Link>
    </>
  );
}
