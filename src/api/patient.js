import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/patient";
const URL_AUTH = BASE_URL + "/auth-patient/local/signin"

export const loginPatient = (data) => {
  return axios.post(`${URL_AUTH}`, data);
};

export const addPatient = (data) => {
  return axios.post(`${URL}`, data);
};

export const getAllPatients = () => {
  return axios.get(`${URL}`);
};

export const getPatient = (id) => {
  return axios.get(`${URL}/${id}`);
};

export const updatePatient = (id, data) => {
  return axios.put(`${URL}/${id}`, data);
};

export const deletePatient = (id) => {
  return axios.delete(`${URL}/${id}`);
};
