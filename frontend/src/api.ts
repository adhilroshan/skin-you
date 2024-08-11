import axios from 'axios';
import { Appointment, AppointmentFormData } from './types';


const API_URL = 'http://localhost:5000/api';
export const bookAppointment = async (appointmentData: AppointmentFormData): Promise<Appointment> => {
    const response = await axios.post<Appointment>(`${API_URL}/book`, appointmentData);
    return response.data;
};

export const getAppointments = async (): Promise<Appointment[]> => {
    const response = await axios.get<Appointment[]>(`${API_URL}/appointments`);
    return response.data;
};

export const searchAppointments = async (query: string): Promise<Appointment[]> => {
    const response = await axios.get<Appointment[]>(`${API_URL}/search`, { params: { query } });
    return response.data;
};

export const getAppointmentById = async (id: string): Promise<Appointment> => {
    const response = await axios.get<Appointment>(`${API_URL}/appointments/${id}`);
    return response.data;
};

export const updateAppointment = async (id: string, appointmentData: AppointmentFormData): Promise<Appointment> => {
    const response = await axios.put<Appointment>(`${API_URL}/appointments/${id}`, appointmentData);
    return response.data;
};

export const deleteAppointment = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/appointments/${id}`);
};
