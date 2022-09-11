import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/doctor";
const URL_AUTH = BASE_URL + "/auth-doctor/local/signin"

export const loginDoctor = (data) => {
  return axios.post(`${URL_AUTH}`, data);
};

export const addDoctor = (data) => {
  return axios.post(`${URL}`, data);
};

export const getAllDoctors = () => {
  return axios.get(`${URL}`);
};

export const getDoctor = (id) => {
  return axios.get(`${URL}/${id}`);
};

export const updateDoctor = (id, data) => {
  return axios.put(`${URL}/${id}`, data);
};

export const deleteDoctor = (id) => {
  return axios.delete(`${URL}/${id}`);
};
