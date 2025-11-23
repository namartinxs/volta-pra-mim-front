import React from 'react';
import Layout from '../components/Layout';
import AvatarGrande from '../assets/avatar_large.png';

export default function Perfil() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[-30px]">
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-azulPrimary overflow-hidden bg-white shadow-lg">
             <img src={AvatarGrande} alt="Admin" className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-azulPrimary">Admin da Silva</h2>
        <div className="mt-6 text-azulPrimary font-semibold text-center border-b pb-4 w-full max-w-2xl">
          Função: Administrador <span className="mx-2">|</span> Ativo desde 1984
        </div>
        <div className="flex items-center gap-6 mt-8 bg-white p-6 rounded-xl shadow-sm">
          <span className="text-azulPrimary font-bold text-lg w-32 leading-tight">
            REQUISIÇÕES PENDENTES
          </span>
          <div className="bg-azulPrimary text-white text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-lg shadow-md">
            2
          </div>
        </div>
      </div>
    </Layout>
  );
}