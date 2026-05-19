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
  gap: 40px; /* Cria um espaçamento seguro entre as duas colunas */

  /* 🌟 RESPONSIVIDADE: Em telas menores, o conteúdo se empilha verticalmente */
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
    gap: 30px;
  }
`;

export const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 auto; /* Centraliza o bloco do formulário se cair no modo coluna */
`;

export const Column = styled.div`
  flex: 1;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px; /* Aumentado para dar destaque proporcional ao slogan */
  max-width: 400px; /* max-width impede o texto de quebrar o layout em telas menores */
  line-height: 44px;
  color: #ffffff;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const TitleLogin = styled.h3`
  /* Alterado para h3 para respeitar a hierarquia de cabeçalhos HTML5 */
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const SubtitleLogin = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffffa0; /* Tom cinza translúcido sutil para melhor legibilidade */
  margin-bottom: 35px;
`;

export const EsqueciText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #e5e044;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const CriarText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #e23dd7;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;
