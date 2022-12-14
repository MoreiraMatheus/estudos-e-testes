import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import { StyledLink } from "../components/StyledLink/style";

export function Login(){
  const navigate = useNavigate()
  const { id } = useParams()

  return(
    <>
      <StyledLink onClick={()=> navigate('/')}>voltar</StyledLink>
      <h1>Você está na página de Login do usuário {id}</h1>
    </>
  )
}