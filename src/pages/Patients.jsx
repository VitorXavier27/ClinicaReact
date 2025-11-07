import { useEffect, useState } from "react";
import { PacientesService } from "../services/PatientsService";
import axios, { Axios } from "axios";
import Model from "../components/model";
import SideBar from "../components/SideBar";

const Patients = () => {
  const [pacientes, setPacientes] = useState([]);
  const [openModal, setOpenModal] = useState();
  const [novoPaciente, setNovoPaciente] = useState({
    id_Paciente: "",
    nome_Paciente: "",
    cpf_Paciente: "",
    data_Nascimento_Paciente: "",
    telefone_Paciente: "",
    email_Paciente: "",
  });

  const handleChange = (e) => {
    setNovoPaciente({
      ...novoPaciente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:8080/pacientes";
      await axios.post(apiUrl, novoPaciente);
      setOpenModal(false);
      const response = await axios.get(apiUrl);
      setPacientes(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Erro ao cadastrar paciente:", error);
    }
  };

  useEffect(() => {
    const apiUrl = "http://localhost:8080/pacientes";

    axios
      .get(apiUrl)
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((error) => {
        console.error("Houve um erro ao buscar os pacientes!", error);
      });
  }, []);

  const handleDelete = async (idPaciente) => {
    try {
      const apiUrl = `http://localhost:8080/pacientes/${idPaciente}`;
      await axios.delete(apiUrl);
      setPacientes(
        pacientes.filter((paciente) => paciente.idPaciente !== idPaciente)
      );
    } catch (error) {
      console.log("Erro ao excluir paciente:", error);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-gray-800">Pacientes</h2>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            + Novo Paciente
          </button>
          <Model
            isOpen={openModal}
            setCloseModal={() => setOpenModal(!openModal)}
          >
            <h1 className=" text-center text-3xl mb-2">Cadastro de Paciente</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center  gap-3">
                <p>Nome Completo</p>
                <input
                  type="text"
                  name="nome_Paciente"
                  value={novoPaciente.nome_Paciente}
                  onChange={handleChange}
                  placeholder="Nome do Paciente"
                  className="border-b-2"
                  required
                />
                <p>CPF</p>
                <input
                  type="text"
                  name="cpf_Paciente"
                  value={novoPaciente.cpf_Paciente}
                  onChange={handleChange}
                  placeholder="CPF"
                  className="border-b-2"
                  required
                />

                <p>Data Nascimento</p>
                <input
                  type="date"
                  name="data_Nascimento_Paciente"
                  value={novoPaciente.data_Nascimento_Paciente}
                  onChange={handleChange}
                  className="border-b-2"
                  required
                />

                <p>Telefone</p>
                <input
                  type="text"
                  name="telefone_Paciente"
                  value={novoPaciente.telefone_Paciente}
                  onChange={handleChange}
                  placeholder="Telefone. Ex:(xx)x.xxxx-xxxx"
                  className="border-b-2"
                  required
                />

                <p>Email</p>
                <input
                  type="text"
                  name="email_Paciente"
                  value={novoPaciente.email_Paciente}
                  onChange={handleChange}
                  placeholder="Digite o Email"
                  className="border-b-2 "
                  required
                />

                <button className="bg-blue-500 hover:bg-blue-800 text-white border- rounded-md cursor-pointer">
                  Registrar
                </button>
              </div>
            </form>
          </Model>
        </div>

        <div class="bg-white rounded-lg shadow mb-6">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-800">
              Lista de Pacientes
            </h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th className="x-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                    ID
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Nome
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    CPF
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Data Nasc.
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Telefone
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Email
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    scope="col"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              {pacientes.map((paciente) => (
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paciente.idPaciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paciente.nomePaciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paciente.cpfPaciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paciente.dataNascimentoPaciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paciente.telefonePaciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {paciente.emailPaciente}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button class="text-blue-600 hover:text-blue-900 mr-3 cursor-progress">
                        Ver
                      </button>
                      <button class="text-yellow-600 hover:text-yellow-900 mr-3">
                        Editar
                      </button>
                      <button
                        class="text-red-600 hover:text-red-900 cursor-pointer"
                        onClick={() => handleDelete(paciente.idPaciente)}
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

export default Patients;
