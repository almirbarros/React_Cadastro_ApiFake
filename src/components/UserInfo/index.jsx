import PropTypes from 'prop-types'; // para validação de tipos em produção
import { Container, NameText, Progress, UserPicture } from "./styles";

// 1. Exportação nomeada direto na função para manter a consistência arquitetural
export function UserInfo({ percentual = 0, nome, image }) {
  return (
    <Container>
      {/* 2. Acessibilidade (alt) adicionada para cumprir as boas práticas modernos */}
      <UserPicture src={image} alt={`Foto de perfil de ${nome}`} />
      <div>
        <NameText>{nome}</NameText>
        <Progress $percentual={percentual} />
      </div>
    </Container>
  );
}

// 3. Validação das propriedades recebidas
UserInfo.propTypes = {
  percentual: PropTypes.number,
  nome: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};