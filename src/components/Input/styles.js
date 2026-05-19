import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: border-color 0.2s ease;

  &:focus-within {
    /* 🌟 ANTES: #e4105d -> AGORA: Lê do tema */
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  color: #8c52ff; /* Dá uma cor sutil para os ícones (Email/Cadeado) */
`;

export const InputText = styled.input`
  background: transparent;
  width: 100%;
  border: 0;
  height: 30px;
  color: #ffffff; /* Garante que o texto digitado pelo usuário seja branco */
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  outline: none; /* Remove a borda nativa do navegador */

  &::placeholder {
    color: #ffffff40; /* Deixa o texto do placeholder cinza discreto */
  }
`;

export const ErrorText = styled.p`
  /* 🌟 ANTES: #e4105d -> AGORA: Lê do tema */
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  margin: -15px 0 20px 0;
`;
