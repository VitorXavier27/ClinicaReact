import axios from "axios";
export const axiosInstance = axios.create({
  baseUrl: "http://localhost:8080/",
});

export class PacientesService {
  listarTodos() {
    return axiosInstance.get("/pacientes");
  }
  inserirDados() {
    return axiosInstance.post("/pacientes");
  }
}

export const pacientesService = new PacientesService();
