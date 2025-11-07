import React from "react";
import SideBar from "../components/SideBar";

const Laboratories = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">Laboratórios</h2>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            + Novo Laboratório
          </button>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Nome do Laboratório
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Laboratório Matriz"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Endereço
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Rua Exemplo, 123, Centro"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Responsável Técnico
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Dr. Fulano de Tal"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Telefone
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="(11) 4004-4004"
                data-mask="(##) ####-####"
              />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Cadastrar Laboratório
            </button>
          </div>
        </form>
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b">
            <h3 class="text-lg font-medium text-gray-800">
              Laboratórios Cadastrados
            </h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Endereço
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Responsável
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Telefone
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Unidade Centro
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Av. Principal, 500
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Dra. Ana Marques
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    (34) 3232-1010
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                      Editar
                    </button>
                    <button class="text-red-600 hover:text-red-900">
                      Excluir
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Unidade Sul
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Rua dos Testes, 2020
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Dr. Pedro Ramos
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    (34) 3333-2020
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                      Editar
                    </button>
                    <button class="text-red-600 hover:text-red-900">
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratories;
