import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/doctor";

export const addDoctor = (data) => {
  return axios.post(`${URL}`, data);
};

export const getAllDoctors = () => {
  return axios.get(`${URL}`);
};
