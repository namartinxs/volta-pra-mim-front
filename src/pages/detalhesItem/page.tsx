import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileImage, SendHorizontal } from 'lucide-react';
import Layout from '../../components/Layout';
import api from '../../services/api';

interface ItemProps {
  id: string;
  nome: string;
  descricao: string;
  local: string;
  status?: string;
}

export default function DetalhesItem() {
  const { id } = useParams();
  const navegar = useNavigate();
  const [item, setItem] = useState<ItemProps | null>(null);
  const [textoReivindicacao, setTextoReivindicacao] = useState('');

  useEffect(() => {
    async function carregarItem() {
      try {
        // GET /lost-items/{id}
        const res = await api.get(`/lost-items/${id}`);
        setItem(res.data);
      } catch (error) {
        alert('Item não encontrado');
        navegar('/encontrados');
      }
    }
    if (id) carregarItem();
  }, [id, navegar]);

  const enviarReivindicacao = async () => {
    if (!textoReivindicacao) return;
    try {
      // POST /claim
      await api.post('/claim', {
        item_id: id,
        description: textoReivindicacao
      });
      navegar('/sucesso', { state: { mensagem: 'Solicitação enviada\ncom sucesso!' } });
    } catch (error) {
      alert('Erro ao enviar solicitação');
    }
  };

  if (!item) return <Layout><p className="text-center mt-10">Carregando...</p></Layout>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 text-azulPrimary">
          <button onClick={() => navegar(-1)} className="hover:bg-blue-50 p-2 rounded-full transition"><ArrowLeft size={28} /></button>
          <h2 className="text-2xl font-bold">Item nº {id?.slice(-4)}</h2>
        </div>

        <div className="bg-white rounded-xl shadow-md p-12 flex flex-col items-center justify-center mb-8 min-h-[300px]">
          <FileImage size={80} strokeWidth={1} className="text-black mb-2" />
          <span className="text-black font-bold text-lg uppercase">IMG</span>
          <span className="text-black mt-2">{item.nome}</span>
        </div>

        <div className="space-y-4 text-gray-700 px-4">
          <p><strong className="text-azulPrimary">Status:</strong> {item.status || 'Pendente'}</p>
          <p><strong className="text-azulPrimary">Descrição:</strong> {item.descricao}</p>
          <p><strong className="text-azulPrimary">Local:</strong> {item.local}</p>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Adicionar Requisição..." 
              className="w-full border border-gray-300 rounded-full px-6 py-3 pr-12 text-gray-600 focus:outline-none focus:ring-2 focus:ring-azulPrimary"
              value={textoReivindicacao}
              onChange={(e) => setTextoReivindicacao(e.target.value)}
            />
            <button onClick={enviarReivindicacao} className="absolute right-2 top-1/2 -translate-y-1/2 bg-azulPrimary text-white p-2 rounded-full hover:bg-blue-800">
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}