import { useNavigate } from "react-router-dom";

import { StyledLink } from "./style";

export function Header() {
  const navigate = useNavigate();
  return (
    <>
      {/* entender pq esse miserável não aceita perder o underline */}
      <StyledLink onClick={() => navigate("/")}>Home</StyledLink>

      <StyledLink onClick={() => navigate("/contact")}>Contato</StyledLink>

      <StyledLink onClick={() => navigate("/login")}>Login</StyledLink>
    </>
  );
}