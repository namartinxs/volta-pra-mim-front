import React from 'react';
import { Plus } from 'lucide-react'; 
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router"
import AvatarImg from '../assets/avatar.png'; // Garanta que essa imagem existe

export default function Layout({ children }) {
  // const navegar = useNavigate();
  const navegar = useRouter()

  const handleclick = (() => {
    navegar.push('/rota')
  }) 

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Cabeçalho Azul */}
      <header className="bg-azulPrimary px-6 py-4 flex justify-between items-center text-white rounded-b-[30px] shadow-lg relative z-20">
        <h1 
          className="text-2xl font-bold pl-2 cursor-pointer" 
          onClick={() => navegar('/encontrados')}
        >
          UniRios
        </h1>
        
        <div className="flex items-center gap-4 pr-2">
          {/* Botão de Adicionar (+) */}
          <button 
            onClick={() => navegar('/adicionar')}
            className="bg-transparent border-2 border-white rounded-full p-1 hover:bg-white/20 transition"
          >
            <Plus size={24} />
          </button>
          
          {/* Avatar Clicável -> Vai para Perfil */}
          <div 
            onClick={() => navegar('/perfil')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 cursor-pointer"
          >
            <img src={AvatarImg} alt="Perfil" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Conteúdo das Páginas */}
      <main className="p-6 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
}