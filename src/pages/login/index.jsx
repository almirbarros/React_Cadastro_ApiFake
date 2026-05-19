import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";

import { useAuth } from "../../hooks/useAuth"; 

const schema = yup.object({
  email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'O mínimo são 3 caracteres').required('Campo obrigatório'),
}).required();

export function Login() {
  const navigate = useNavigate();
 
  // Consome o login usando a sintaxe moderna e limpa do useAuth
  const { handleLogin } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = async (formData) => {
    await handleLogin(formData);
  };
  
  return (
    <>
      <Header /> {/* Removido prop autenticado pois o Header agora se gerencia sozinho */}
      <Container>
        <Column>
          <Title>
            Sua mente é a chave para transformar desafios em grandes oportunidades.
            Acredite no poder das suas ideias e na sua capacidade de inovar.
            Entre no sistema com coragem, pois cada novo acesso é o início de uma grande criação.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu login</TitleLogin>
            <SubtitleLogin>
              Entre com suas credenciais para acessar sua conta e marque para mudar.
            </SubtitleLogin> 
            
            <form onSubmit={handleSubmit(onSubmit)}>              
              <Input 
                name="email" 
                errorMessage={errors.email?.message} 
                control={control} 
                leftIcon={<MdEmail />} 
                placeholder="Digite seu email" 
                type="email" 
              />
              <Input 
                name="password" 
                errorMessage={errors.password?.message} 
                control={control} 
                leftIcon={<MdLock />} 
                placeholder="Digite sua senha" 
                type="password" 
              />

              <Button title="Entrar" variant="secondary" type="submit"/>
            </form>
            
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={() => navigate('/cadastro')}>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
