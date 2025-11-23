import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router"
import Layout from '../components/Layout';
import api from '../services/api';
import AvatarGrande from '../assets/avatar_large.png';

export default function AdicionarItem() {
  const navegar = useRouter()
  // const navegar = useNavigate();
  const [dadosForm, setDadosForm] = useState({
    nome: '',
    descricao: '',
    local: '',
    data: ''
  });

  const aoAlterar = (e) => {
    setDadosForm({ ...dadosForm, [e.target.name]: e.target.value });
  };

  const aoEnviar = async (e) => {
    e.preventDefault();
    try {
      // POST /lost-items
      await api.post('/lost-items', dadosForm);
      navegar('/sucesso', { state: { mensagem: 'Item adicionado\ncom sucesso!' } });
    } catch (erro) {
      console.error(erro);
      alert('Erro ao cadastrar item.');
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <div className="mt-[-40px] mb-6 relative z-10">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md bg-white">
            <img src={AvatarGrande} alt="Usuário" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="text-left w-full mb-6">
          <h2 className="text-azulPrimary font-bold text-lg leading-snug">
            Admin da Silva,<br />Adicione um item ao sistema
          </h2>
        </div>

        <form onSubmit={aoEnviar} className="w-full flex flex-col gap-6">
          <input name="nome" placeholder="Nome" value={dadosForm.nome} onChange={aoAlterar} className="input-padrao" required />
          <input name="descricao" placeholder="Descrição" value={dadosForm.descricao} onChange={aoAlterar} className="input-padrao" required />
          <input name="local" placeholder="Local" value={dadosForm.local} onChange={aoAlterar} className="input-padrao" required />
          <input name="data" placeholder="Data" value={dadosForm.data} onChange={aoAlterar} className="input-padrao" />
          
          <div className="flex justify-center mt-8">
            <button type="submit" className="bg-azulPrimary text-white font-bold py-3 px-16 rounded-full hover:bg-blue-800 transition shadow-lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}