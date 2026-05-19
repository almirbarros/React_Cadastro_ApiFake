import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px; /* Cria um espaçamento seguro entre o texto e a imagem */

  /* 🌟 RESPONSIVIDADE: Em telas de celular ou tablets, o texto fica em cima e a imagem embaixo */
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px; /* Aumentado levemente para dar mais destaque ao título principal */
  max-width: 400px; /* max-width impede o texto de vazar em telas pequenas */
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

export const TitleHighlight = styled.span`
  color: #e4105d; /* Rosa identidade da plataforma */
`;

export const TextContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  max-width: 450px; /* max-width adaptável para qualquer tela */
  margin-bottom: 30px; /* Espaço ligeiramente maior antes do botão */
  line-height: 22px;
  color: #ffffffc0; /* Branco ligeiramente translúcido melhora a leitura de parágrafos */
`;
