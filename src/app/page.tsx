
/** @jsxRuntime automatic */
/** @client */

//Isso é para rodar do lado Client e não do serv
'use client'

import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    email: '',
    senha: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="p-8 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h1 className="text-lg font-bold text-center mb-6">Cadastro</h1>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input type="text" id="nome" name="nome" required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
          <input type="password" id="senha" name="senha" required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 onChange={handleChange}
          />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700">Cadastrar</button>
      </form>
    </div>
  )
}

export default Home;
