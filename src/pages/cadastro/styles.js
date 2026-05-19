import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const Column = styled.div`
  flex: ${({ $flex }) => $flex || 1};
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
  max-width: 450px;
`;

export const TitleRegister = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const SubtitleRegister = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffffa0;
  margin-bottom: 35px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TenhoContaText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  margin-right: 5px;
`;

export const LoginText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #23dd7a; /* Verde sucesso para destacar a ação */
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;
