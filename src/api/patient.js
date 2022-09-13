import axios from "axios";
import { BASE_URL } from "../configs";
import { axiosInstance } from "./config";


const URL = BASE_URL + "/patient";
const URL_AUTH = BASE_URL + "/auth-patient/local"

export const loginPatient = (data) => {
  return axios.post(`${URL_AUTH}/signin`, data);
};

export const registerPatient = (data) => {
  return axios.post(`${URL_AUTH}/signup`, data);
};

export const getAllPatients = () => {
  return axiosInstance.get(`${URL}`);
};

export const getPatient = (id) => {
  return axios.get(`${URL}/${id}`);
};

export const updatePatient = (id, data) => {
  return axiosInstance.put(`${URL}/${id}`, data);
};

export const deletePatient = (id) => {
  return axiosInstance.delete(`${URL}/${id}`);
};

export const appAppointmentPatient = (data) => {
  return axiosInstance.post(`${BASE_URL}/appointment`, data);
};

export const getPatientAppointment = (id) => {
  return axiosInstance.get(`${BASE_URL}/appointment/patient/${id}`);
};
