import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});

export class DoctorsService {
  listarTodos() {
    return axiosInstance.get("/medicos");
  }
}

export const doctorsService = new DoctorsService();
