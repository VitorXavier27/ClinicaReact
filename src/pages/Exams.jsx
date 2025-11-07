import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Model from "../components/model";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const Exams = () => {
  const location = useLocation();
  const dadosAgendamento = location.state;
  const [exame, setExame] = useState([]);
  const [openModal, setOpenModal] = useState();
  // const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/exame";
    // const apiUrl1 = "http://localhost:8080/pacientes";

    axios
      .get(apiUrl)
      .then((response) => {
        setExame(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Erro ao buscar Exame", error);
      });

    // axios
    //   .get(apiUrl1)
    //   .then((response) => {
    //     setPacientes(response.data);
    //     console.log(response);
    //   })
    //   .catch((error) => console.error("Erro ao buscar paciente", error));
  }, []);

  const handleDelete = async (idExame) => {
    try {
      const apiUrl = `http://localhost:8080/exame/${idExame}`;
      await axios.delete(apiUrl);
      setExame(exame.filter((exame) => exame.id_Exame !== idExame));
    } catch (error) {
      console.log("Erro ao excluir Exame!", error);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">Exames</h2>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            + Novo Exame
          </button>
        </div>

        <div class="bg-white rounded-lg shadow mb-6">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-800">Lista de Exames</h3>
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
                    Tipo
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
                {exame.map((exames) => (
                  <tr key={exames.id_Exame}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {exames.id_Exame}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {exames.tipo_Exame}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {exames.nome_Paciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {exames.data_Exame}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full status-pendente">
                        Pendente
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        class="text-blue-600 hover:text-blue-900 mr-3"
                        onClick={() => setOpenModal(true)}
                      >
                        <Link to="/Report">Ver Laudo</Link>
                      </button>

                      {/* <Model
                        isOpen={openModal}
                        setCloseModal={() => setOpenModal(!openModal)}
                      ></Model> */}
                      <button class="text-green-600 hover:text-green-900 mr-3">
                        Validar
                      </button>
                      <button
                        class="text-red-600 hover:text-red-900 cursor-pointer"
                        onClick={() => handleDelete(exames.id_Exame)}
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

export default Exams;
