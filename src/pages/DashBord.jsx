import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import axios from "axios";


const DashBord = () => {
  const [totalPacientes, setTotalPacientes] = useState(0);

  useEffect(() => {
    const fetchTotalPacientes = async () => {
      try{
        const response = await axios.get('http://localhost:8080/pacientes/total')
        setTotalPacientes(response.data)
      }catch(error){
        console.error("Erro ao buscar total de pacientes: ", error);
        setTotalPacientes('Erro')
      }
    }
    fetchTotalPacientes();
  },[])

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <a href="#" class="tab-link card-link" data-tab="pacientes">
            <div class="card bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-500">Pacientes</h3>
                  <p class="text-2xl font-semibold text-gray-800">{totalPacientes}</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="tab-link card-link" data-tab="exames">
            <div class="card bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-purple-100 text-purple-600">
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-500">Exames</h3>
                  <p class="text-2xl font-semibold text-gray-800">3,426</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="tab-link card-link" data-tab="amostras">
            <div class="card bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-500">Amostras</h3>
                  <p class="text-2xl font-semibold text-gray-800">856</p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="tab-link card-link" data-tab="exames">
            <div class="card bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-green-100 text-green-600">
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-500">Concluídos</h3>
                  <p class="text-2xl font-semibold text-gray-800">2,845</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="bg-white rounded-lg shadow mb-6 item">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-800">Exames Recentes</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    ID
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Paciente
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Tipo
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Data
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #301
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    João Silva
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Hemograma Completo
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    30/06/2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-pendente">
                      Pendente
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button class="text-blue-600 hover:text-blue-900 mr-3">
                      Ver
                    </button>
                    <button class="text-green-600 hover:text-green-900">
                      Validar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #302
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Maria Oliveira
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Glicemia
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    29/06/2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-processando">
                      Processando
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button class="text-blue-600 hover:text-blue-900 mr-3">
                      Ver
                    </button>
                    <button class="text-green-600 hover:text-green-900">
                      Validar
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #303
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Carlos Santos
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Colesterol Total
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    28/06/2025
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-concluido">
                      Concluído
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button class="text-blue-600 hover:text-blue-900 mr-3">
                      Ver
                    </button>
                    <button class="text-gray-400 cursor-not-allowed">
                      Validar
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

export default DashBord;
