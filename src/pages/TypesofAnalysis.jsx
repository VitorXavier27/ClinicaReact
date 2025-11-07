import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";

const TypesofAnalysis = () => {
  const [tipoAnalise, setTipoAnalise] = useState([]);
  const [nomeAnalise, setNomeAnalise] = useState("");
  const [descricaoAnalise, setDescricaoAnalise] = useState("");
  const [instrucaoAnalise, setInstrucaoAnalise] = useState("");

  const handleCriarAnalise = async () => {
    const analiseCriada = {
      tipo_Analise: nomeAnalise,
      descricao_TipoAnalise: descricaoAnalise,
      instrucao_TipoAnalise: instrucaoAnalise,
    };

    try {
      const apiUrl = "http://localhost:8080/tipoAnalise";
      await axios.post(apiUrl, analiseCriada);
      console.log(analiseCriada);
      const response = await axios.get(apiUrl);
      setTipoAnalise(response.data);
      setNomeAnalise("");
      setDescricaoAnalise("");
      setInstrucaoAnalise("");
    } catch (error) {
      console.error("Erro ao Criar Analise", error);
      alert("Erro ao salvar nova Analise");
    }
  };

  useEffect(() => {
    const apiUrl = "http://localhost:8080/tipoAnalise";

    axios
      .get(apiUrl)
      .then((response) => {
        setTipoAnalise(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar Analise!", error);
      });
  }, []);

  const handleDelete = async (idAnalise) => {
    const apiUrl = `http://localhost:8080/tipoAnalise/${idAnalise}`;
    await axios.delete(apiUrl);
    setTipoAnalise(tipoAnalise.filter((Id) => Id.id_TipoAnalise !== idAnalise));
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">
            Cadastro de Tipos de Análises
          </h2>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Nome da Análise
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              value={nomeAnalise}
              onChange={(e) => setNomeAnalise(e.target.value)}
              placeholder="Ex: Hemograma Completo"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Descrição
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={descricaoAnalise}
              onChange={(e) => setDescricaoAnalise(e.target.value)}
              placeholder=""
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Instruções de Coleta
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              value={instrucaoAnalise}
              onChange={(e) => setInstrucaoAnalise(e.target.value)}
              placeholder="Ex: Jejum de 8 horas necessário."
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleCriarAnalise}
            >
              Cadastrar Análise
            </button>
          </div>
        </form>
        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b">
            <h3 class="text-lg font-medium text-gray-800">
              Análises Cadastradas
            </h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome da Análise
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Instrução de Coleta
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white divide-y divide-gray-200">
                {tipoAnalise.map((analise) => (
                  <tr>
                    <td class="px-6 py-4">{analise.id_TipoAnalise}</td>
                    <td class="px-6 py-4">{analise.tipo_Analise}</td>
                    <td class="px-6 py-4">{analise.descricao_TipoAnalise}</td>
                    <td class="px-6 py-4">{analise.instrucao_TipoAnalise}</td>

                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                        Editar
                      </button>
                      <button
                        class="text-red-600 hover:text-red-900 cursor-pointer"
                        onClick={() => handleDelete(analise.id_TipoAnalise)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesofAnalysis;
