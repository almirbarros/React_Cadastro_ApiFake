import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 🌟 Mantém a foto e o bloco de texto alinhados verticalmente */
  margin-bottom: 16px; /* Substituído margin-top por margin-bottom para empilhamento correto na lista */
  width: 100%;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%; /* 🌟 GARANTE o círculo perfeito */
  border: 2px solid #ffffff; /* Reduzido levemente para melhor contraste */
  margin-right: 12px;
  object-fit: cover; /* 🌟 IMPEDE que a foto do usuário fique esticada */
`;

export const NameText = styled.h4`
  /* 🌟 Alterado para h4: tag semântica correta para títulos/nomes */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 4px; /* Cria um pequeno espaço entre o nome e a barra */
`;

export const Progress = styled.div`
  width: 180px; /* TAMANHO CONTROLADO: define a largura exata da barra de progresso na barra lateral */
  height: 6px;
  background: #ffffff60; /* fundo branco com opacidade cria um visual muito mais elegante */
  border-radius: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $percentual }) =>
      $percentual ?? 0}%; /* Desestruturação limpa e moderna de props */
    height: 6px;
    border-radius: 3px;
    background-color: #23dd7a; /* Verde do progresso ranking */
  }
`;
