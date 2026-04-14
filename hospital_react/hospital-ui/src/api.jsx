import axios from "axios";

const BASE = "http://localhost:8080";

export const getPatients = () => axios.get(`${BASE}/patients`);
export const addPatient = (data) => axios.post(`${BASE}/patients`, data);
export const deletePatient = (id) => axios.delete(`${BASE}/patients/${id}`);

export const getDoctors = () => axios.get(`${BASE}/doctors`);
export const addDoctor = (data) => axios.post(`${BASE}/doctors`, data);

export const getAppointments = () => axios.get(`${BASE}/appointments`);
export const addAppointment = (data) => axios.post(`${BASE}/appointments`, data);