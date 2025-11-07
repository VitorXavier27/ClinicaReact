import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [novoUsuario, setNovoUsuario] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setNovoUsuario({
      ...novoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:8080/users";
      await axios.post(apiUrl, novoUsuario);
    } catch (error) {
      console.log("Erro ao Registrar", error);
    }
  };

  return (
    <div className="flex flex-col m-6">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800">Crie sua Conta</h1>
          <p class="mt-2 text-gray-600">
            Preencha os campos abaixo para se registrar.
          </p>
        </div>

        <form onSubmit={handleSubmit} method="POST" class="space-y-4">
          <div>
            <label for="nome" class="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              // id="nome"
              name="name"
              value={novoUsuario.name}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={novoUsuario.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label for="senha" class="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="password"
              value={novoUsuario.password}
              onChange={handleChange}
              placeholder="Mínimo de 8 caracteres"
              required
              minlength="8"
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              for="confirmar-senha"
              class="block text-sm font-medium text-gray-700"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmar-senha"
              name="confirmPassword"
              value={novoUsuario.confirmPassword}
              onChange={handleChange}
              placeholder="Repita a senha"
              required
              class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full py-2 px-4 text-white font-semibold bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out cursor-pointer"
            >
              Registrar
            </button>
          </div>
        </form>

        <div class="text-center text-sm text-gray-600">
          <p>
            Já tem uma conta?
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Faça login aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
