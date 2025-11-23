import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PartyPopper } from 'lucide-react';
import Layout from '../components/Layout';

export default function PaginaSucesso() {
  const navegar = useNavigate();
  const location = useLocation();
  const mensagem = location.state?.mensagem || "Operação realizada\ncom sucesso!";

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="mb-8">
           <PartyPopper size={120} className="text-azulPrimary opacity-80" />
        </div>
        <h2 className="text-azulPrimary text-2xl font-bold whitespace-pre-line mb-12">
          {mensagem}
        </h2>
        <button 
          onClick={() => navegar('/encontrados')} 
          className="bg-azulPrimary text-white font-bold py-2 px-12 rounded-full hover:bg-blue-800 transition"
        >
          Voltar
        </button>
      </div>
    </Layout>
  );
}