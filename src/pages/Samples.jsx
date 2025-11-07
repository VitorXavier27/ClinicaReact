import React from "react";
import SideBar from "../components/SideBar";

const Samples = () => {
  return (
    <div class="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Amostras</h2>
        <div class="bg-white rounded-lg shadow mb-6">
          <div class="px-70 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-800">
              Rastreamento de Amostras
            </h3>
          </div>
          <div class="p-6 px-60">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Código
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paciente
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data Coleta
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ABC123XYZ
                  </td>
                  <td class="px-6 py-4">João Silva</td>
                  <td class="px-6 py-4">30/06/2025</td>
                  <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-coletada">
                      Coletada
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    DEF456UVW
                  </td>
                  <td class="px-6 py-4">Maria Oliveira</td>
                  <td class="px-6 py-4">29/06/2025</td>
                  <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-processando">
                      Processando
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    GHI789RST
                  </td>
                  <td class="px-6 py-4">Carlos Santos</td>
                  <td class="px-6 py-4">28/06/2025</td>
                  <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-concluido">
                      Concluído
                    </span>
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

export default Samples;
