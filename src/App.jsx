import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { Toaster } from "sonner";

// Importação do Contexto e da Rota Protegida
import { AuthProvider } from "./context/AuthProvider"; 
import { ProtectedRoute } from "./components/ProtectedRoute";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* 1. O AuthProvider precisa ficar dentro do BrowserRouter para usar o useNavigate */}
        <AuthProvider>
          <GlobalStyle />
          <Toaster theme="dark" position="top-right" richColors /> 
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            
            {/* 2. A Rota do Feed agora fica envelopada e protegida */}
            <Route 
              path="/feed" 
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
