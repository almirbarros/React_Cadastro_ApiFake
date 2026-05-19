import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "sonner";
import { AuthContext } from "./auth"; 


export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storagedUser = localStorage.getItem("@MeuApp:user");
    return storagedUser ? JSON.parse(storagedUser) : null;
  });
  
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { data } = await api.get("users");
      
      const userExists = data.find(
        (u) => u.email === formData.email && u.senha === formData.password
      );

      if (userExists) {
        localStorage.setItem("@MeuApp:user", JSON.stringify(userExists));
        setUser(userExists);
        toast.success(`Bem-vindo de volta, ${userExists.name}!`);
        navigate("/feed");
      } else {
        toast.error("E-mail ou senha inválidos.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro técnico na autenticação.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("@MeuApp:user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
