import axios from "axios";
import { BASE_URL } from "../configs";
import { axiosInstance } from "./config";

const URL = BASE_URL + "/doctor";
const URL_AUTH = BASE_URL + "/auth-doctor/local"

export const loginDoctor = (data) => {
  return axios.post(`${URL_AUTH}/signin`, data);
};

export const registerDoctor = (data) => {
  return axios.post(`${URL_AUTH}/signup`, data);
};

export const getAllDoctors = () => {
  return axiosInstance.get(`${URL}`);
};

export const getAllDoctorsID = () => {
  return axiosInstance.get(`${URL}/id`);
};

export const getDoctor = (id) => {
  return axios.get(`${URL}/${id}`);
};

export const updateDoctor = (id, data) => {
  return axiosInstance.put(`${URL}/${id}`, data);
};

export const deleteDoctor = (id) => {
  return axiosInstance.delete(`${URL}/${id}`);
};

export const getDoctorAppointment = (id) => {
  return axiosInstance.get(`${BASE_URL}/appointment/doctor/${id}`);
};
