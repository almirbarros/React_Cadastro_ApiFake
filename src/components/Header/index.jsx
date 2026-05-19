import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from "../../hooks/useAuth"; 

import logo from '../../assets/react.svg';
import Almir from '../../assets/almir.jpg'; 
import { Button } from '../Button';

import {
  ActionRow,
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
  NavContainer 
} from './styles';

export function Header() {
  const navigate = useNavigate();

  // Puxa o handleSignOut direto do seu contexto global
  const { user, isAuthenticated, handleSignOut } = useAuth();
  
  const handleNavigateToLogin = () => navigate('/login');
  const handleNavigateToRegister = () => navigate('/cadastro');

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo do React" />
          </Link>
          
          {isAuthenticated && (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <NavContainer> 
                <Menu href="/live">Live Code</Menu>
                <Menu href="/global">Global</Menu>
              </NavContainer>
            </>
          )}
        </Row>
        
        <ActionRow>
          {isAuthenticated ? (
            <>
              <MenuRight as={Link} to="/">Home</MenuRight>
              {/* Botão de Sair que dispara o encerramento da sessão */}
              <MenuRight onClick={handleSignOut} style={{ color: '#ff5f5f', fontWeight: 'bold' }}>
                Sair
              </MenuRight>
              <UserPicture src={Almir} alt={`Foto de perfil de ${user?.name || 'Usuário'}`} />
            </>
          ) : (
            <>
              <MenuRight as={Link} to="/">Home</MenuRight>
              <Button title="Entrar" variant="secondary" onClick={handleNavigateToLogin} />
              <Button title="Cadastrar" variant="secondary" onClick={handleNavigateToRegister} />
            </>
          )}
        </ActionRow>
      </Container>
    </Wrapper>
  );
}
