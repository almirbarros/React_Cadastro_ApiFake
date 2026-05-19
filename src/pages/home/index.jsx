import { useNavigate } from "react-router-dom"; 
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from "../../assets/hero.png";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

export function Home() {
  const navigate = useNavigate();
  
  // Função moderna de clique para redirecionamento
  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Header carregado no estado não autenticado por padrão */}
      <Header autenticado={false} />
      
      <Container>
        <div>
          <Title>
            <TitleHighlight>Olá,</TitleHighlight> seja bem-vindo ao <TitleHighlight>Meu App</TitleHighlight>!
            <br />
          </Title>
          <TextContent>
            A criatividade nasce quando você permite que a sua mente brinque
            sem o medo de errar. Todo grande projeto começou apenas como uma
            ideia imperfeita e um pequeno passo. Acredite no poder da sua
            visão e na capacidade única que você tem de inovar. Apenas comece
            a criar, pois a ação constante atrai a verdadeira motivação. Sua
            imaginação é infinita; liberte-a e transforme seus sonhos em realidade hoje.
          </TextContent>
          
          <Button 
            title="Começar agora"  
            variant="secondary" 
            onClick={handleNavigateToLogin} 
          />
        </div>
        
        <div>
          {/* Tag de imagem mantida com alt para acessibilidade e SEO */}
          <img src={bannerImage} alt="Ilustração de boas-vindas do Meu App" />
        </div>
      </Container>
    </>
  );
}