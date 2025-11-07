import axios from "axios";
import React, { useEffect, useState } from "react";

function Report() {
  const [laudo, SetLaudo] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/laudo";

    axios
      .get(apiUrl)
      .then((response) => {
        SetLaudo(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Erro ao buscar laudo", error);
        alert("Teste");
      });
  }, []);
  return (
    <div className="flex">
      <h2>Teste</h2>
      <div className="flex flex-col m-6">
        <div class="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-2xl">
          <div class="flex justify-end mb-8 no-print">
            <button
              onclick="window.print()"
              class="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Imprimir / Salvar PDF
            </button>
          </div>
          <header class="flex justify-between items-center border-b-2 border-gray-200 pb-6 mb-8">
            <div>
              <h1 class="text-3xl font-bold text-gray-800">
                Clínica IFTM Laboratórios
              </h1>
              <p class="text-gray-500">
                Rua da Análise, 123 - Centro - Uberlândia, MG
              </p>
              <p class="text-gray-500">
                CNPJ: 12.345.678/0001-99 | (34) 3210-5678
              </p>
            </div>
            <div class="text-right">
              <img
                src="https://placehold.co/150x50?text=Logo+Clinica"
                alt="Logo da Clínica"
                class="h-12"
              />
            </div>
          </header>
          {/* {laudo.map((laudo) => ( */}
          <section class="mb-8">
            <h2 class="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Informações do Paciente
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <strong class="text-gray-600 block">Paciente:</strong>
                <span class="text-gray-800">{laudo.nome_Paciente}</span>
              </div>
              <div>
                <strong class="text-gray-600 block">Idade:</strong>
                <span class="text-gray-800">28 anos</span>
              </div>
              <div>
                <strong class="text-gray-600 block">Sexo:</strong>
                <span class="text-gray-800">Masculino</span>
              </div>
              <div>
                <strong class="text-gray-600 block">Convênio:</strong>
                <span class="text-gray-800">Unimed</span>
              </div>
              <div>
                <strong class="text-gray-600 block">Médico Solicitante:</strong>
                <span class="text-gray-800">Dr. Vitor Xavier</span>
              </div>
              <div>
                <strong class="text-gray-600 block">
                  Data da Solicitação:
                </strong>
                <span class="text-gray-800">09/10/2025</span>
              </div>
              <div>
                <strong class="text-gray-600 block">Código da Guia:</strong>
                <span class="text-gray-800">PED-20251009-0042</span>
              </div>
            </div>
          </section>
          ))}
          <section>
            <h2 class="text-2xl font-bold text-center text-blue-700 bg-blue-50 py-3 rounded-t-lg mb-0">
              Exames Solicitados
            </h2>

            <div class="overflow-x-auto">
              <table class="w-full text-left border border-gray-200">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="py-3 px-4 text-lg font-semibold text-gray-700">
                      ERITROGRAMA
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-200">
                  <tr>
                    <td class="py-2 px-4">Contagem de Hemácias</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">Dosagem de Hemoglobina</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">Determinação do Hematócrito</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">VCM (Volume Corpuscular Médio)</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">
                      HCM (Hemoglobina Corpuscular Média)
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">
                      CHCM (Concentração de Hemoglobina Corpuscular Média)
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">RDW (Índice de Anisocitose)</td>
                  </tr>
                </tbody>

                <thead class="bg-gray-100">
                  <tr>
                    <th class="py-3 px-4 text-lg font-semibold text-gray-700 pt-6">
                      LEUCOGRAMA
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-200">
                  <tr>
                    <td class="py-2 px-4">Contagem de Leucócitos Totais</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4">
                      Contagem Diferencial (Neutrófilos, Linfócitos, Monócitos,
                      etc.)
                    </td>
                  </tr>
                </tbody>

                <thead class="bg-gray-100">
                  <tr>
                    <th class="py-3 px-4 text-lg font-semibold text-gray-700 pt-6">
                      PLAQUETAS
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr>
                    <td class="py-2 px-4 border-b">Contagem de Plaquetas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <footer class="mt-16 pt-8 border-t-2 border-dashed">
            <div class="text-center">
              <p class="font-mono">___________________________________</p>
              <p class="mt-2 font-semibold text-gray-800">Dr. Vitor Xavier</p>
              <p class="text-sm text-gray-600">Médico Solicitante</p>
              <p class="text-sm text-gray-600">CRM: 123456-MG</p>
            </div>
            <p class="text-center text-xs text-gray-400 mt-8">
              Clínica IFTM - Excelência em Diagnósticos
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Report;
