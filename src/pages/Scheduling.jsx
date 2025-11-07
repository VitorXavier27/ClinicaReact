import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const Scheduling = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [analise, setAnalise] = useState([]);
  const [pacienteSelecionado, setPacienteSelecionado] = useState("");
  const [exameSelecionado, setExameSelecionado] = useState("");
  const [unidadeColeta, setUnidadeColeta] = useState("");
  const [dataHora, setDataHora] = useState("");

  const navigate = useNavigate();

  const handleAgendarExame = async () => {
    const dadosAgendamento = {
      pacienteId: pacienteSelecionado,
      tipo_Exame: exameSelecionado,
      unidade: unidadeColeta,
      data_Exame: dataHora,
    };

    try {
      await axios.post("http://localhost:8080/exame", dadosAgendamento);
      navigate("/exams", { state: dadosAgendamento });
      console.log(dadosAgendamento);
    } catch (error) {
      console.error("Erro ao salvar agendamento!", error);
      alert("Erro ao salvar agendamento!");
    }
  };

  useEffect(() => {
    const apiUrl = "http://localhost:8080/pacientes";
    const apiUrl1 = "http://localhost:8080/pedido";
    const apiUrl2 = "http://localhost:8080/tipoAnalise";

    axios
      .get(apiUrl)
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao Buscar Paciente!", error);
      });

    axios
      .get(apiUrl1)
      .then((response) => {
        setPedido(response.data);
      })
      .catch((error) => {
        console.error("Erro ao Buscar Pedido!", error);
      });

    axios
      .get(apiUrl2)
      .then((response) => {
        setAnalise(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar Analise");
      });
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">
          Agendamento de Exame
        </h2>
        <div class="bg-white shadow-md rounded px-60 pt-10 pb-10 mb-30">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Paciente:
              </label>
              <select
                name=""
                id=""
                value={pacienteSelecionado}
                onChange={(e) => setPacienteSelecionado(e.target.value)}
                className="hadow border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Selecione um Nome</option>
                {pacientes.map((paciente) => (
                  <option key={paciente.idPaciente} value={paciente.idPaciente}>
                    {paciente.nomePaciente}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                CPF do Paciente:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="000.000.000-00"
                data-mask="###.###.###-##"
                value={
                  pacientes.find((p) => p.idPaciente == pacienteSelecionado)
                    ?.cpfPaciente || ""
                }
                readOnly
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Tipo de Exame:
              </label>
              <select
                class="shadow border rounded w-full py-2 px-3 text-gray-700"
                value={exameSelecionado}
                onChange={(e) => setExameSelecionado(e.target.value)}
              >
                <option>Escolha o Exame!</option>
                {analise.map((analise) => (
                  <option
                    key={analise.id_TipoAnalise}
                    value={analise.tipo_TipoAnalise}
                  >
                    {analise.tipo_Analise}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Unidade de Coleta:
              </label>
              <select
                class="shadow border rounded w-full py-2 px-3 text-gray-700"
                value={unidadeColeta}
                onChange={(e) => setUnidadeColeta(e.target.value)}
              >
                <option>Unidade Centro</option>
                <option>Unidade Sul</option>
              </select>
            </div>
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                type="datetime-local"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
              >
                Data e Horário:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                type="datetime-local"
                value={dataHora}
                onChange={(e) => setDataHora(e.target.value)}
              />
            </div>
          </div>
          <div class="mt-6">
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleAgendarExame}
            >
              Agendar Exame
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
