import { useNavigate } from "react-router-dom";

import { StyledLink } from "../StyledLink/style";

export function Header() {
  const navigate = useNavigate();
  return (
    <>
      <StyledLink onClick={() => navigate("/")}>Home</StyledLink>

      <StyledLink onClick={() => navigate("/contact")}>Contato</StyledLink>

      <StyledLink onClick={() => navigate("/login/2")}>Login</StyledLink>
    </>
  );
}
