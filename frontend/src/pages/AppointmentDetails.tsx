import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Appointment } from '../types';
import { getAppointmentById, deleteAppointment } from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const AppointmentDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [appointment, setAppointment] = useState<Appointment | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const data = await getAppointmentById(id!);
                setAppointment(data);
            } catch (error) {
                console.error('Error fetching appointment:', error);
            }
        };

        fetchAppointment();
    }, [id]);

    const handleDeleteAppointment = async () => {
        if (!window.confirm('Are you sure you want to delete this appointment?')) {
            return;
        }

        try {
            await deleteAppointment(id!);
            navigate('/appointments');
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    };

    const handleEditAppointment = () => {
        navigate(`/appointments/update/${id}`);
    };

    if (!appointment) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto max-w-2xl p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Appointment Details</h1>
            <div className="bg-white p-6 relative">
                <div className="absolute top-4 right-4 space-x-4">
                    <button
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={handleEditAppointment}
                    >
                        <FontAwesomeIcon icon={faEdit} size="lg" />
                    </button>
                    <button
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        onClick={handleDeleteAppointment}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                    </button>
                </div>
                <div className='flex flex-col'>
                    <p className="text-gray-600">{appointment.service}</p>
                    <p className="font-semibold text-xl text-gray-900">{appointment.name}</p>
                    <p className="text-gray-600">Concern: {appointment.concern}</p>
                </div>
                <div className='flex flex-col my-2'>
                    <p className="text-gray-600 text-sm">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        {appointment.phoneNumber}

                    </p>
                    <p className="text-sm text-gray-500">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                        {new Date(appointment.date).toDateString()}

                    </p>
                    <p className='flex gap-2 text-sm text-gray-500  items-center '>
                        <span className=' font-medium'>

                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            {appointment.time}
                        </span>
                    </p>

                </div>
                {/* <p className="font-semibold text-xl text-gray-900">{appointment.name}</p>
                <p className="text-gray-600">{appointment.service}</p>
                <p className="text-sm text-gray-500">
                    {new Date(appointment.date).toDateString()} at {appointment.time}
                </p>
                <p className="text-gray-600">Phone: {appointment.phoneNumber}</p>
                <p className="text-gray-600">Concern: {appointment.concern}</p> */}
            </div>
        </div>
    );
    // return (
    //     <div className="container mx-auto p-4">
    //         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Appointment Details</h1>
    //         <div className="bg-white  p-6">
    //             <p className="font-semibold text-xl text-gray-900">{appointment.name}</p>
    //             <p className="text-gray-600">{appointment.service}</p>
    //             <p className="text-sm text-gray-500">
    //                 {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
    //             </p>
    //             <p className="text-gray-600">Phone: {appointment.phoneNumber}</p>
    //             <p className="text-gray-600">Concern: {appointment.concern}</p>
    //             <div className="mt-4 space-x-4">
    //                 <button
    //                     className="text-gray-500 hover:text-gray-700 transition-colors"
    //                     onClick={handleEditAppointment}
    //                 >
    //                     <FontAwesomeIcon icon={faEdit} size="lg" />
    //                 </button>
    //                 <button
    //                     className="text-gray-500 hover:text-gray-700 transition-colors"
    //                     onClick={handleDeleteAppointment}
    //                 >
    //                     <FontAwesomeIcon icon={faTrashAlt} size="lg" />
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default AppointmentDetails;
