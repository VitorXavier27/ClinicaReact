import React from "react";
import SideBar from "../components/SideBar";

const Reports = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">
            Relatórios Gerenciais
          </h2>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Tipo de Relatório
              </label>
              <select class="shadow border rounded w-full py-2 px-3 text-gray-700">
                <option>Produtividade</option>
                <option>Faturamento</option>
                <option>Exames Realizados</option>
                <option>Pacientes Atendidos</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Data Inicial
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="date"
                value="2025-06-01"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Data Final
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="date"
                value="2025-06-30"
              />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Gerar Relatório
            </button>
          </div>
        </form>
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b">
            <h3 class="text-lg font-medium text-gray-800">
              Histórico de Relatórios
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
                    Tipo
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Período
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Data de Geração
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Gerado Por
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
                    Faturamento
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    01/05/2025 - 31/05/2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    01/06/2025 09:30
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Dr. Carlos Santos
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-blue-600 hover:text-blue-900">
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Exames Realizados
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    01/04/2025 - 30/04/2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    01/05/2025 11:00
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Dr. Carlos Santos
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-blue-600 hover:text-blue-900">
                      Download
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

export default Reports;
