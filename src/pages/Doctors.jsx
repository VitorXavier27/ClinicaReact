import React, { useEffect, useState } from "react";
import axios from "axios";
import Model from "../components/model";
import SideBar from "../components/SideBar";

const Doctors = () => {
  const [doutores, setDoutores] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [novoMedico, setNovoMedico] = useState({
    id_Medico: "",
    nome_Medico: "",
    crm_Medico: "",
    especialidade_Medico: "",
    telefone_Medico: "",
  });

  const handleChange = (e) => {
    setNovoMedico({
      ...novoMedico,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:8080/medicos";
      await axios.post(apiUrl, novoMedico);
      setOpenModal(false);
      const response = await axios.get(apiUrl);
      setDoutores(response.data);
    } catch (error) {
      console.log("Erro ao Cadastrar Medico:" + error);
    }
  };

  useEffect(() => {
    const apiURL = "http://localhost:8080/medicos";

    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data);
        setDoutores(response.data);
      })
      .catch((error) => {
        console.error("Houve um erro ao buscar o Medico!", error);
      });
  }, []);

  const handleDelete = async (idMedico) => {
    try {
      const apiUrl = `http://localhost:8080/medicos/${idMedico}`;
      await axios.delete(apiUrl);
      setDoutores(doutores.filter((doutor) => doutor.id_Medico !== idMedico));
    } catch (error) {
      console.log("Erro ao excluir medico!", error);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">Médicos</h2>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setOpenModal(true)}
          >
            + Novo Médico
          </button>
          <Model
            isOpen={openModal}
            setCloseModal={() => setOpenModal(!openModal)}
          >
            <h1 className=" text-center text-3xl mb-2">Cadastro de Medicos</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center  gap-3">
                <p>Nome do Medico</p>
                <input
                  type="text"
                  name="nome_Medico"
                  value={novoMedico.nome_Medico}
                  onChange={handleChange}
                  placeholder="Nome Do Medico..."
                  className="border-b-2"
                />
                <p>CRM do Medico</p>
                <input
                  type="text"
                  name="crm_Medico"
                  value={novoMedico.crm_Medico}
                  onChange={handleChange}
                  placeholder="CRM..."
                  className="border-b-2"
                />
                <p>Especialidade do Medico</p>
                <input
                  type="text"
                  name="especialidade_Medico"
                  value={novoMedico.especialidade_Medico}
                  onChange={handleChange}
                  placeholder="Especialidade"
                  className="border-b-2"
                />
                <p>Telefone</p>
                <input
                  type="text"
                  name="telefone_Medico"
                  value={novoMedico.telefone_Medico}
                  onChange={handleChange}
                  placeholder="Telefone"
                  className="border-b-2"
                />
                <button className="bg-blue-500 hover:bg-blue-800 text-white border- rounded-md cursor-pointer">
                  Registrar
                </button>
              </div>
            </form>
          </Model>
        </div>

        <div class="bg-white rounded-lg shadow">
          <div class="px-6 py-4 border-b">
            <h3 class="text-lg font-medium text-gray-800">
              Médicos Cadastrados
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
                    ID
                  </th>
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
                    CRM
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Especialidade
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Contato
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              {doutores.map((doutor) => (
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {doutor.id_Medico}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {doutor.nome_Medico}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doutor.crm_Medico}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doutor.especialidade_Medico}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doutor.telefone_Medico}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                        Editar
                      </button>
                      <button
                        class="text-red-600 hover:text-red-900 cursor-pointer"
                        onClick={() => handleDelete(doutor.id_Medico)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
