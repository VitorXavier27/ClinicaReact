import React from "react";
import SideBar from "../components/SideBar";

const Equipment = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">
            Cadastro de Equipamentos
          </h2>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Nome do Equipamento
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Analisador Hematológico"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Modelo
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Sysmex XN-1000"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Fabricante
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Sysmex"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Status de Operação
              </label>
              <select class="shadow border rounded w-full py-2 px-3 text-gray-700">
                <option>Operacional</option>
                <option>Em Manutenção</option>
                <option>Inativo</option>
              </select>
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Cadastrar Equipamento
            </button>
          </div>
        </form>
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b">
            <h3 class="text-lg font-medium text-gray-800">
              Equipamentos Cadastrados
            </h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modelo
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fabricante
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4">Analisador Hematológico</td>
                  <td class="px-6 py-4">Sysmex XN-1000</td>
                  <td class="px-6 py-4">Sysmex</td>
                  <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-operacional">
                      Operacional
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                      Editar
                    </button>
                    <button class="text-blue-600 hover:text-blue-900">
                      Ver Histórico
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Analisador Bioquímico</td>
                  <td class="px-6 py-4">Cobas c501</td>
                  <td class="px-6 py-4">Roche</td>
                  <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-operacional">
                      Operacional
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                      Editar
                    </button>
                    <button class="text-blue-600 hover:text-blue-900">
                      Ver Histórico
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4">Centrífuga Refrigerada</td>
                  <td class="px-6 py-4">5810 R</td>
                  <td class="px-6 py-4">Eppendorf</td>
                  <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-manutencao">
                      Em Manutenção
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                      Editar
                    </button>
                    <button class="text-blue-600 hover:text-blue-900">
                      Ver Histórico
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

export default Equipment;
