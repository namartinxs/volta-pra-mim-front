import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoreVertical, FileImage } from 'lucide-react';
import Layout from '../components/Layout';
import api from '../services/api';

export default function ItensEncontrados() {
  const [itens, setItens] = useState([]);
  const navegar = useNavigate();

  useEffect(() => {
    async function buscarItens() {
      try {
        // GET /lost-items
        const resposta = await api.get('/lost-items');
        setItens(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar itens", erro);
        // Fallback visual caso a API esteja vazia/offline
        setItens([]); 
      }
    }
    buscarItens();
  }, []);

  return (
    <Layout>
      <div className="mb-6 mt-4">
        <h2 className="text-azulPrimary text-2xl font-bold">Encontrados</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {itens.length === 0 ? (
           <p className="col-span-full text-center text-gray-400 mt-10">Nenhum item encontrado.</p>
        ) : (
          itens.map((item) => (
            <div 
              key={item._id || item.id} 
              onClick={() => navegar(`/item/${item._id || item.id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-between aspect-[4/5] hover:shadow-md transition cursor-pointer"
            >
              <div className="flex-1 flex flex-col items-center justify-center text-black mb-2">
                <FileImage size={40} strokeWidth={1.5} />
                <span className="text-xs font-bold mt-1 uppercase">IMG</span>
              </div>

              <div className="w-full flex justify-between items-end">
                <span className="text-azulPrimary text-sm truncate w-full text-left pr-2">
                  {item.nome || 'Item sem nome'}
                </span>
                <button className="text-azulPrimary hover:bg-blue-50 rounded-full p-1">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}