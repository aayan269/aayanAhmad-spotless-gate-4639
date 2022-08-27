import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const Navigate=useNavigate()

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
    setToken("");
    Navigate('/login')
  };

  const value = { handleLogout, handleLogin, isAuth, token, setToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
