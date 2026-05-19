import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%; /* Mudança de 87% para 100%, deixando o contêiner pai controlar o grid */
  max-width: 800px; /* Garante que o card não estique infinitamente em telas gigantes */
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
  border-radius: 8px; /* Opcional: cantos levemente arredondados deixam o visual moderno */
  overflow: hidden; /* Garante que o banner não passe das bordas arredondadas */
`;

export const ImagemBackground = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover; /* 🌟 ESSENCIAL: impede que a imagem fique esticada ou achatada */
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px; /* Aumentado levemente para melhor respiro visual */
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* Alinha a imagem verticalmente com o bloco de texto */
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff90; /* Uso de opacidade para criar hierarquia visual no tempo */
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%; /* Padrão moderno para círculos perfeitos */
  border: 2px solid #ffffff;
  object-fit: cover;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffffc0;
    word-break: break-word; /* Previne que o layout quebre com palavras longas */
  }
`;

export const HasInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h4 {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff80;
    word-break: break-all; /* Permite que as hashtags quebrem de linha se o espaço apertar */
  }

  p {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    padding-right: 50px;
    white-space: nowrap;
    flex-shrink: 0;

    svg {
      color: #e4105d;
      font-size: 18px;
      flex-shrink: 0;
    }
  }
`;
