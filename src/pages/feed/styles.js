import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px; /* Usa gap em vez de padding-right fixo para afastar as colunas */
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const TitleHighlight = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff70; /* Efeito cinza translúcido moderno para o título do ranking */
  margin-bottom: 24px;
`;

export const Column = styled.div`
  /* Alterado para $flex (Transient Prop) para não vazar no HTML final */
  flex: ${({ $flex }) => $flex || 1};
  display: flex;
  flex-direction: column;
`;
