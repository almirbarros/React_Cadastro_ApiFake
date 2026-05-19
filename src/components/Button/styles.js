import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;
  border: 0; /* Garante que a borda padrão do HTML seja removida */

  color: #ffffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  height: 30px; /* Define uma altura padrão para o botão primário alinhar */

  /* Melhores práticas de usabilidade na raiz */
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8; /* Opacidade um pouco maior para melhor contraste visual */
  }

  /* Aplica estilos específicos apenas se a variante for explicitamente 'secondary' */
  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      min-width: 167px;
      height: 33px;
      /* 🌟 ANTES: #e4105d -> AGORA: Lê do tema */
      background: ${({ theme }) => theme.colors.primary};

      &::after {
        content: "";
        position: absolute;
        /* 🌟 ANTES: #e4105d -> AGORA: Lê do tema */
        border: 1px solid ${({ theme }) => theme.colors.primary};
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
