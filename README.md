# 🚀 Meu App - Plataforma de Aprendizado com React

[![React](https://shields.io)](https://reactjs.org)
[![Styled Components](https://shields.io)](https://styled-components.com)
[![React Hook Form](https://shields.io)](https://react-hook-form.com)
[![Vite](https://shields.io)](https://vitejs.dev)

Uma aplicação Single Page Application (SPA) moderna que simula uma plataforma de ensino tecnológico. O projeto conta com fluxos completos de cadastro, autenticação baseada em contexto, validação de formulários em tempo real, rotas privadas blindadas e consumo de API mockada.

---

## 🛠️ Funcionalidades Críticas

- **Autenticação Global**: Gerenciada via Context API com inicialização otimizada (*Lazy State*) para evitar consultas repetitivas ao disco.
- **Formulários Inteligentes**: Validação assíncrona no evento `onChange` utilizando `React Hook Form` integrado ao engine do `Yup`.
- **Rotas Protegidas**: Componente guardião que intercepta acessos ao feed, tratando estados de carregamento e histórico do navegador (`replace`).
- **Resolução Dinâmica de Assets**: Dicionário de imagens integrado ao pipeline do Vite para resolver caminhos textuais vindos de APIs sem quebrar em ambiente de produção.
- **Design de Sistema Escalável**: Tema centralizado e folha de estilos global com suporte nativo a suavização de fontes (*antialiasing*).

---

## 📐 Estrutura Arquitetural das Pastas

```text
📂 src
 ┣ 📂 assets       # Imagens e vetores locais gerenciados pelo bundler
 ┣ 📂 components   # Componentes atômicos e semânticos (Transient Props aplicadas)
 ┣ 📂 context      # Estados globais e Providers isolados contra dependência circular
 ┣ 📂 hooks        # Hooks customizados para abstração de consumo e segurança
 ┣ 📂 pages        # Telas e orquestradores de fluxo (Home, Cadastro, Login, Feed)
 ┣ 📂 services     # Configuração cliente HTTP centralizada (Axios)
 ┗ 📂 styles       # Design Tokens (Cores, Fontes) e Reset CSS Global
```

---

## 🚀 Tecnologias e Ferramentas Utilizadas

- **React 18** (Renderização Concorrente com `createRoot`)
- **Vite** (Ambiente de desenvolvimento ultrarrápido)
- **Styled Components** (CSS-in-JS com herança de blocos e polimorfismo `as={Link}`)
- **React Router Dom v6** (Gerenciamento de rotas e histórico)
- **React Icons** (Conjunto de ícones vetoriais)
- **Sonner** (Biblioteca de notificações toast de alta performance)
- **Axios** (Instância HTTP com controle estrito de `timeout`)
- **JSON Server** (Simulação robusta de banco de dados REST)

---

## 🔧 Instalação e Execução Local

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (ou **Yarn**) instalados em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com
   cd seu-repositorio
   ```

2. **Instale as dependências do ecossistema:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de banco de dados fictício (JSON Server):**
   ```bash
   npx json-server --watch db.json --port 8001
   ```

4. **Em outro terminal, execute o servidor de desenvolvimento do Front-end:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

Acesse o endereço indicado no seu terminal (geralmente `http://localhost:5173`) para visualizar a aplicação.

---

## 📊 Credenciais de Teste (Mock DB)

Para testar o fluxo de login sem a necessidade de criar uma nova conta, utilize os dados já populados no `db.json`:


| E-mail | Senha | Nome do Usuário |
| :--- | :--- | :--- |
| `almir@email.com` | `123456` | Almir Barros |
| `bernardo@email.com` | `876543` | Bernardo Pirata |

---

## 🗄️ Estrutura do Banco de Dados Mockado (JSON Server)

A persistência de dados local é simulada pelo arquivo `db.json`. Ele fornece as rotas REST completas para gerenciar o fluxo de autenticação e preencher dinamicamente a barra lateral de pontuação.

### 👥 1. users (Coleção de Usuários)
- **Endpoint**: `/users`
- **Campos**: `id`, `name`, `email`, `senha`.
- **Objetivo**: Armazenar os perfis cadastrados para validação no formulário de login.
```json
[
  { "id": 1, "name": "Almir", "email": "almir@email.com", "senha": "123456" },
  { "id": 2, "name": "Bernardo", "email": "bernardo@email.com", "senha": "876543" }
]
```

### 🏆 2. ranking (Coleção do Ranking)
- **Endpoint**: `/ranking`
- **Campos**: `id`, `nome`, `image`, `percentual`.
- **Objetivo**: Fornecer a listagem de progresso e as referências de imagens processadas no feed.
```json
[
  { "id": 1, "nome": "Almir Barros", "image": "/almir.jpg", "percentual": 48 },
  { "id": 2, "nome": "Bernardo Pirata", "image": "/bernardo.jpg", "percentual": 6 },
  { "id": 3, "nome": "Vanessa Correa", "image": "/vanessa.jpg", "percentual": 44 },
  { "id": 4, "nome": "Larissa Correa", "image": "/larissa.jpg", "percentual": 22 },
  { "id": 5, "nome": "Breno Barros", "image": "/breno.jpg", "percentual": 23}
]
```

---

## 🖼️ Mapeamento de Telas & Fluxo de Negócio

Abaixo está o detalhamento técnico e visual das principais interfaces que compõem o ecossistema da aplicação, integrando componentes semânticos e assets dinâmicos.

### 🏠 1. Home (Página Inicial)
- **Objetivo**: Tela de boas-vindas com foco em conversão de usuários.
- **Assets Utilizados**: `src/assets/hero.png` (Ilustração promocional responsiva).
- **Lógica de Estilos**: Alinhamento inteligente via `flex-direction` que se adapta automaticamente para dispositivos móveis, jogando a imagem para o topo e centralizando os textos motivacionais.
<img width="1587" height="698" alt="image" src="https://github.com/user-attachments/assets/b8f41bc0-dc4a-4f80-a57f-07f5208dbdcd" />

### 📝 2. Cadastro (Registro de Usuário)
- **Objetivo**: Permitir a criação de novas contas com validação em tempo real.
- **Componentes & Ícones**: Integração com `react-hook-form` + `Yup`. Utiliza os ícones `MdPerson`, `MdEmail` e `MdLock` para os campos do formulário.
- **Lógica de Estilos**: Schema de validação configurado no modo `onChange`, fornecendo feedback visual imediato na cor `${theme.colors.error}` caso os critérios mínimos não sejam atendidos.
<img width="1590" height="790" alt="image" src="https://github.com/user-attachments/assets/5b662241-a93f-485f-a6f4-3f2f78e5b8e4" />

### 🔐 3. Login (Autenticação)
- **Objetivo**: Validar credenciais de acesso contra a base mockada do JSON Server.
- **Componentes & Ícones**: Reutiliza a estrutura atômica do componente `Input` injetando os ícones `MdEmail` e `MdLock`.
- **Lógica de Estilos**: Uso avançado do seletor `&:focus-within` no container do input, aplicando a cor de foco `${theme.colors.primary}` na borda inferior sem causar re-renderizações via JavaScript.
<img width="1602" height="800" alt="image" src="https://github.com/user-attachments/assets/9b8cefb2-5f9e-499c-97da-aa63f34b6568" />

- ### 👤 4. Menu e Estado Logado (Gerenciamento de Sessão)
- **Objetivo**: Adaptar a interface global e o cabeçalho (`Header`) dinamicamente quando um usuário está autenticado.
- **Lógica de Negócio**: 
  - Consome o hook customizado `useAuth()` para monitorar o estado de `isAuthenticated` de forma reativa.
  - Altera o fluxo visual ocultando botões públicos de "Entrar" e "Cadastrar", exibindo a barra de pesquisa interna, links exclusivos (`Live Code` / `Global`) e a foto do perfil ativo.
- **Mecanismo de Logoff (Sair)**: Dispara a função `handleSignOut`, responsável por limpar de forma segura os dados salvos em `@MeuApp:user` no `localStorage`, redefinir os estados globais e redirecionar o usuário instantaneamente para a tela de login.
<img width="1659" height="706" alt="image" src="https://github.com/user-attachments/assets/d644ee71-9c0c-4be3-a1aa-08136d7ec39a" />

### 📰 5. Feed & Ranking (Área Protegida)
- **Objetivo**: Exibir as postagens da comunidade e o ranking de pontuação da semana.
- **Assets Utilizados**: Fotos de perfil locais (`almir.jpg`, `bernardo.jpg`, `breno.jpg`, `larissa.jpg`, `vanessa.jpg`).
- **Lógica de Negócio & Estilos**: 
  - Renderização dinâmica através de um dicionário de imagens integrado ao pipeline do Vite, evitando quebra de caminhos de arquivos em produção.
  - Ordenação automatizada de dados utilizando o algoritmo `[...data].sort((a, b) => b.percentual - a.percentual)`.
  - Barras de progresso responsivas que utilizam *Transient Props* (`$percentual`) para controlar o preenchimento dinâmico do CSS via pseudo-elementos `&::after`.
<img width="1599" height="918" alt="image" src="https://github.com/user-attachments/assets/818c02df-ebfa-4659-81f6-686d150bbe34" />

## 🧑‍💻 Autor

Desenvolvido por **Almir Barros** — Sinta-se à vontade para se conectar comigo ou contribuir com o projeto!
