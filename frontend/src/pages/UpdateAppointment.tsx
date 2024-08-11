import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAppointmentById, updateAppointment } from '../api';
import { AppointmentFormData } from '../types';

const UpdateAppointment: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<AppointmentFormData>({
        name: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        service: '',
        concern: ''
    });

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const appointment = await getAppointmentById(id!);
                setFormData(appointment);
            } catch (error) {
                console.error('Error fetching appointment:', error);
            }
        };

        fetchAppointment();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateAppointment(id!, formData);
            navigate('/appointments');
        } catch (error) {
            console.error('Error updating appointment:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Appointment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <input type="text" name="service" value={formData.service} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <textarea name="concern" value={formData.concern} onChange={handleChange} required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Update Appointment
                </button>
            </form>
        </div>
    );
}

export default UpdateAppointment;
