"use client";

import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  // tenta validar se já está autenticado (mesmo sem /me)
  useEffect(() => {
    api
      .get("/validate") // se não existir ainda, eu te explico já já
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  async function login(email: string, password: string) {
    await api.post("/login", { email, password });
    setIsAuthenticated(true);
  }

  async function logout() {
    await api.post("/logout");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
