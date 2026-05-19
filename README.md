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

## 🧑‍💻 Autor

Desenvolvido por **Almir Barros** — Sinta-se à vontade para se conectar comigo ou contribuir com o projeto!

[![LinkedIn](https://shields.io)](https://linkedin.com)
[![GitHub](https://shields.io)](https://github.com)
