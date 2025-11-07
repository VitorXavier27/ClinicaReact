import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";

const Guides = () => {
  const [paciente, setPacientes] = useState([]);
  const [medico, setMedico] = useState([]);
  const [guias, setGuias] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState("");
  const [convenioSelecionado, setConvenioSelecionado] = useState("");
  const [numeroGuia, setNumeroGuia] = useState("");
  const [medicoSelecionado, setMedicoSelecionado] = useState("");

  const angedarTeste = async () => {
    const teste1 = {
      pacienteId: pacienteSelecionado,
      convenio_Guia: convenioSelecionado,
      numero_Guia: numeroGuia,
      id_Medico: medicoSelecionado,
    };

    try {
      await axios.post("http://localhost:8080/guia", teste1);
      console.log(teste1);
      setPacienteSelecionado("");
      setConvenioSelecionado("");
      setNumeroGuia("");
      setMedicoSelecionado("");
    } catch (error) {
      console.error("Erro ao Gerar Guia!", error);
      alert("Erro ao cadastro de guia");
    }
  };

  const handleDelete = async (idGuia) => {
    try {
      const apiUrlD = `http://localhost:8080/guia/${idGuia}`;
      await axios.delete(apiUrlD);
      setGuias(guias.filter((guia) => guia.id_Guia !== idGuia));
    } catch (error) {
      console.log("Erro ao Excluir Guia", error);
    }
  };

  useEffect(() => {
    const apiUrl = "http://localhost:8080/pacientes";
    const apiUrl1 = "http://localhost:8080/medicos";
    const apiUrl2 = "http://localhost:8080/guia";

    axios
      .get(apiUrl)
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar Pacientes!", error);
      });

    axios
      .get(apiUrl1)
      .then((response) => {
        setMedico(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar Medico!", error);
      });

    axios
      .get(apiUrl2)
      .then((response) => {
        setGuias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar guias", error);
      });
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Emissão e Controle de Guias
          </h2>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Paciente
              </label>
              <select
                className="hadow border rounded w-full py-2 px-3 text-gray-700"
                value={pacienteSelecionado}
                onChange={(e) => setPacienteSelecionado(e.target.value)}
              >
                <option value="">Selecione o Paciente</option>
                {paciente.map((paciente) => (
                  <option key={paciente.idPaciente} value={paciente.idPaciente}>
                    {paciente.nomePaciente}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                CPF do Paciente
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                data-mask="###.###.###-##"
                placeholder="000.000.000-00"
                value={
                  paciente.find((p) => p.idPaciente == pacienteSelecionado)
                    ?.cpfPaciente || ""
                }
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Convênio
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Unimed, SulAmérica, etc."
                value={convenioSelecionado}
                onChange={(e) => setConvenioSelecionado(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                N° Da Guia
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="text"
                placeholder="Numero da Guia"
                value={numeroGuia}
                onChange={(e) => setNumeroGuia(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Médico Solicitante
              </label>
              <select
                className="hadow border rounded w-full py-2 px-3 text-gray-700"
                value={medicoSelecionado}
                onChange={(e) => setMedicoSelecionado(e.target.value)}
              >
                <option value="">Selecione o Medico</option>
                {medico.map((medico) => (
                  <option key={medico.id_Medico} value={medico.id_Medico}>
                    {medico.nome_Medico}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={angedarTeste}
            >
              Gerar Guia
            </button>
          </div>
        </form>
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-medium text-gray-800">
              Guias Emitidas Recentemente
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID Guia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nº Guia
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paciente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Convênio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {guias.map((guia) => (
                  <tr key={guia.id_Guia}>
                    <td className="px-6 py-4">{guia.id_Guia}</td>
                    <td className="px-6 py-4">{guia.numero_Guia}</td>
                    <td className="px-6 py-4">{guia.nome_Paciente}</td>
                    <td className="px-6 py-4">{guia.convenio_Guia}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-coletada">
                        Utilizada
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-900">
                        Visualizar
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Imprimir
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 cursor-pointer"
                        onClick={() => handleDelete(guia.id_Guia)}
                      >
                        Cancelar
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

export default Guides;
