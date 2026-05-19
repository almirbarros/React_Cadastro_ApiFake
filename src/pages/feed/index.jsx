import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { api } from "../../services/api";

// Importações dos seus arquivos locais na pasta assets
import Almir from '../../assets/almir.jpg'; 
import Bernardo from '../../assets/Bernardo.jpg'; 
import Breno from '../../assets/Breno.jpg'; 
import Larissa from '../../assets/Larissa.jpg'; 
import Vanessa from '../../assets/Vanessa.jpg'; 

import { Container, Column, Title, TitleHighlight } from "./styles";

// 1. Dicionário Moderno: Mapeia o nome do arquivo no JSON para a variável importada do Vite
const localImages = {
  "almir.jpg": Almir,
  "bernardo.jpg": Bernardo,
  "breno.jpg": Breno,
  "larissa.jpg": Larissa,
  "vanessa.jpg": Vanessa
};

export function Feed() {
  const [rankingList, setRankingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRanking() {
      try {
        const { data } = await api.get("ranking");
        
        // GARANTE A ORDENAÇÃO: Cria uma nova cópia do array e ordena do maior para o menor
        const sortedData = [...data].sort((a, b) => b.percentual - a.percentual);
        
        setRankingList(sortedData);
      } catch (error) {
        console.error("Erro ao buscar o ranking:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRanking();
  }, []);

  return (
    <>
      <Header autenticado={true} />
      <Container>
        {/* Coluna do Feed */}
        <Column $flex={3}>
          <Title>Feed</Title>
          
          {/* Card 1: Almir*/}
          <Card 
            userName="Almir Barros"
            userImage={Almir}
            timeAgo="Há 8 minutos"
            title="Projeto para curso de React"
            description="Projeto feito com o intuito de aprender React, utilizando Styled Components para estilização."
            tags="#react #reactjs #javascript #css"
            likesCount={77}
          />

          {/* Card 2: Bernardo */}
          <Card 
            userName="Bernardo Pirata"
            userImage={Bernardo}
            timeAgo="Há 15 minutos"
            title="Dominando o React Router Dom v6"
            description="Acabei de estruturar a proteção de rotas privadas usando o novo formato de Data Routers. A performance de transição de páginas ficou incrível!"
            tags="#reactrouter #spa #webdev #javascript"
            likesCount={42}
          />

          {/* Card 3: Vanessa */}
          <Card 
            userName="Vanessa Correa"
            userImage={Vanessa}
            timeAgo="Há 2 horas"
            title="Integrando React Hook Form + Yup"
            description="Esqueça o gerenciamento manual de inputs com useState! Centralizar a lógica de validação em um schema com o Yup poupou mais de 50 linhas de código no formulário."
            tags="#reacthookform #yup #validation #clean_code"
            likesCount={28}
          />

          {/* Card 4: Larissa */}
          <Card 
            userName="Larissa Correa"
            userImage={Larissa}
            timeAgo="Há 5 horas"
            title="Criando APIs rápidas com JSON Server"
            description="Impressionada em como o json-server v1 simplifica os testes no Front-end. Conseguimos simular requisições GET, POST e filtros complexos em poucos minutos."
            tags="#jsonserver #api #mock #frontend"
            likesCount={19}
          />

          {/* Card 5: Breno */}
          <Card 
            userName="Breno Barros"
            userImage={Breno}
            timeAgo="Ontem"
            title="Estilização moderna com Transient Props"
            description="Dica rápida para Styled Components: use sempre o prefixo '$' (ex: $variant) para passar propriedades aos seus blocos de estilo. Isso evita poluir a tag HTML final."
            tags="#styledcomponents #cssinjs #react #uidesign"
            likesCount={56}
          />
        </Column>

        {/* Coluna do Ranking */}
        <Column $flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          
          {loading ? (
            <p style={{ color: '#ffffff' }}>Carregando ranking...</p>
          ) : (
            rankingList.map((user) => {
              const imgString = user.image || "";
              let finalImage = imgString;

              // 2. LÓGICA DE RESOLUÇÃO: Se for link externo (http), mantém a string
              if (!imgString.startsWith("http")) {
                // Remove barras extras e coloca tudo em minúsculo para bater com a chave do dicionário
                const fileName = imgString.replace(/^\//, "").toLowerCase();
                
                // Se o nome do arquivo existir no nosso dicionário, usa o import do Vite.
                // Caso não exista, ele assume que é um arquivo na pasta 'public'.
                finalImage = localImages[fileName] || `/${imgString.replace(/^\//, "")}`;
              }

              return (
                <UserInfo 
                  key={user.id} 
                  percentual={user.percentual} 
                  nome={user.nome} 
                  image={finalImage} 
                />
              );
            })
          )}
        </Column>
      </Container>
    </>
  );
}