import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActionRow = styled(Row)`
  gap: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BuscarInputContainer = styled.div`
  width: 275px;
  height: 30px;
  background-color: #2d2d37;
  border-radius: 8px;
  padding: 2px 8px; /* Ajustado levemente para dar mais respiro interno */
  margin: 0 12px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #ffffff;
  outline: none; /* Previne a borda amarela/azul padrão do navegador ao focar */
  font-size: 14px;

  &::placeholder {
    color: #ffffff60; /* Torna o texto "Buscar..." discretamente visível */
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Menu = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff80; /* Efeito hover moderno */
  }

  /* Alterado para Transient Prop ($menu) para não vazar pro HTML */
  ${({ $menu }) =>
    $menu === "active" &&
    css`
      color: #ff5f5f;
    `}
`;

export const MenuRight = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline; /* Ajuda o usuário a entender que é um link clicável */
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%; /* Garante um círculo perfeito sempre */
  border: 2px solid #ffffff;
  object-fit: cover; /* Evita que a foto do usuário fique esticada */
`;
