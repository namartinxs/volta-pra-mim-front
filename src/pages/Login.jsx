import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/LOGO_VPM.png'; 

export default function Login() {
  const navegar = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estados para controlar a animação
  const [exibirIntro, setExibirIntro] = useState(true); // Controla se a div existe no HTML
  const [animarSaida, setAnimarSaida] = useState(false); // Controla a opacidade (fade-out)

  useEffect(() => {
    // 1. A logo fica parada no centro por 1.5 segundos (1500ms)
    const timerInicio = setTimeout(() => {
      setAnimarSaida(true); // Começa a transição de dissolver
    }, 1500);

    // 2. Espera o tempo da transição terminar (1s) para remover o elemento da tela
    const timerRemocao = setTimeout(() => {
      setExibirIntro(false);
    }, 2500); // 1500ms (espera) + 1000ms (duração do fade)

    return () => {
      clearTimeout(timerInicio);
      clearTimeout(timerRemocao);
    };
  }, []);

  const aoFazerLogin = (e) => {
    e.preventDefault();
    console.log("Logando com:", email, senha);
    navegar('/encontrados');
  };

  return (
    <div className="min-h-screen bg-azulPrimary flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* --- ANIMAÇÃO DE INTRODUÇÃO (SPLASH SCREEN) --- */}
      {exibirIntro && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-azulPrimary transition-opacity duration-1000 ease-in-out ${
            animarSaida ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <img 
            src={LogoImg} 
            alt="Carregando..." 
            className="w-48 md:w-64 animate-pulse" 
          />
        </div>
      )}
      
      {/* --- CONTEÚDO DA PÁGINA (Login Layout) --- */}
      <div className={`flex flex-col md:flex-row items-center max-w-5xl w-full gap-12 transition-all duration-1000 ${animarSaida ? 'scale-100' : 'scale-95'}`}>
        
        {/* Lado Esquerdo - Marca */}
        <div className="flex-1 flex flex-col items-center md:items-start text-white">
          <img src={LogoImg} alt="Logo" className="w-48 mb-6 md:w-64" /> 
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
            Te ajudo a encontrar o que?
          </h2>
        </div>

        {/* Lado Direito - Card de Login */}
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
          <h3 className="text-azulPrimary text-2xl font-bold text-center mb-8">
            Efetue seu login
          </h3>
          
          <form onSubmit={aoFazerLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              type="password"
              placeholder="Senha"
              className="w-full border border-gray-300 rounded-full px-6 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button
              type="submit"
              className="mt-4 bg-azulPrimary text-white font-bold py-3 rounded-full hover:bg-blue-800 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}