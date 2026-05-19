import { useNavigate } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from '../../services/api';

import { toast } from "sonner"; 

import { 
  Column, 
  Container, 
  Row, 
  SubtitleRegister, 
  Title, 
  TitleRegister, 
  Wrapper, 
  LoginText, 
  TenhoContaText 
} from "./styles";

// 1. Schema do Yup: Valida os 3 campos e obriga termos de uso
const schema = yup.object({
  name: yup.string().min(3, 'O nome deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
  email: yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Campo obrigatório'),
}).required();

export function Cadastro() {
  const navigate = useNavigate();

  // 2. Inicialização moderna do useForm com valores padrão
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  // 3. Envio dos dados para a API (Método POST)
  const onSubmit = async (formData) => {
    try {
      const userPayload = {
        name: formData.name,
        email: formData.email,
        senha: formData.password 
      };

      const { status } = await api.post("users", userPayload);

      if (status === 201) {
        toast.success("Conta criada com sucesso!");
        navigate('/login'); 
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao registrar conta. E-mail já pode estar em uso.");
    }
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column $flex={1}>
          <Title>
            Sua mente é a chave para transformar desafios em grandes oportunidades.
            Acredite no poder das suas ideias e na sua capacidade de inovar.
            Entre no sistema com coragem, pois cada novo acesso é o início de uma grande criação.
          </Title>
        </Column>

        <Column $flex={1}>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>Crie sua conta e make the change._</SubtitleRegister> 
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                name="name" 
                errorMessage={errors.name?.message} 
                control={control} 
                leftIcon={<MdPerson />} 
                placeholder="Nome completo" 
                type="text" 
              />
              <Input 
                name="email" 
                errorMessage={errors.email?.message} 
                control={control} 
                leftIcon={<MdEmail />} 
                placeholder="E-mail" 
                type="email" 
              />
              <Input 
                name="password" 
                errorMessage={errors.password?.message} 
                control={control} 
                leftIcon={<MdLock />} 
                placeholder="Senha" 
                type="password" 
              />
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>

            <Row>
              <SubtitleRegister style={{ marginTop: '20px', fontSize: '14px' }}>
                Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso.
              </SubtitleRegister>
            </Row>

            <Row style={{ marginTop: '20px' }}>
              <TenhoContaText>Já tenho conta.</TenhoContaText>
              <LoginText onClick={() => navigate('/login')}>Fazer login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}