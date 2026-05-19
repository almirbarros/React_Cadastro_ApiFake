import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  // Se NÃO estiver autenticado, redireciona imediatamente para a página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver tudo certo, renderiza a página protegida (o children)
  return children;
}
