import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAppointments, searchAppointments } from '../api';
import { Appointment } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const AppointmentList: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const data = await getAppointments();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    const handleSearch = async (query: string) => {
        try {
            const data = await searchAppointments(query);
            setAppointments(data);
        } catch (error) {
            console.error('Error searching appointments:', error);
        }
    };

    // const handleDeleteAppointment = async (id: string) => {
    //     if (!window.confirm('Are you sure you want to delete this appointment?')) {
    //         return;
    //     }

    //     try {
    //         await deleteAppointment(id);
    //         setAppointments(appointments.filter((appointment) => appointment._id !== id));
    //     } catch (error) {
    //         console.error('Error deleting appointment:', error);
    //     }
    // };

    // const handleUpdateAppointment = (id: string) => {
    //     navigate(`/appointments/update/${id}`);
    // };

    const handleViewAppointment = (id: string) => {
        navigate(`/appointments/${id}`);
    };

    return (
        <div className="container mx-auto max-w-2xl p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Appointments</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search appointments..."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
            </div>
            <ul className="space-y-4">
                {appointments.map((appointment) => (
                    <li
                        key={appointment._id}
                        className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center transition-transform transform hover:scale-105 active:scale-95 duration-200 cursor-pointer"
                        onClick={() => handleViewAppointment(appointment._id)}
                    >
                        <div className='flex flex-col'>
                            <p className="text-gray-600">{appointment.service}</p>
                            <p className="font-semibold text-xl text-gray-900">{appointment.name}</p>
                            <p className="text-gray-600">Concern: {appointment.concern}</p>
                        </div>
                        <div className='flex flex-col text-right'>
                            <p className="text-gray-600 text-sm">
                                {appointment.phoneNumber}
                                <FontAwesomeIcon icon={faPhone} className="mx-2" />

                            </p>
                            <p className="text-sm text-gray-500">
                                {new Date(appointment.date).toDateString()}
                                <FontAwesomeIcon icon={faCalendarAlt} className="mx-2" />

                            </p>
                            <p className='flex gap-2 text-sm text-gray-500  items-center justify-end'>
                                <span className=' font-medium'>

                                    {appointment.time}
                                    <FontAwesomeIcon icon={faClock} className="mx-2" />
                                </span>
                            </p>

                        </div>
                        {/* <div className="space-x-4">
                            <button
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleUpdateAppointment(appointment._id);
                                }}
                            >
                                <FontAwesomeIcon icon={faEdit} size="lg" />
                            </button>
                            <button
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteAppointment(appointment._id);
                                }}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                            </button>
                        </div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AppointmentList;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAppointments, deleteAppointment, searchAppointments } from '../api';
// import { Appointment } from '../types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// const AppointmentList: React.FC = () => {
//     const [appointments, setAppointments] = useState<Appointment[]>([]);
//     const [searchQuery, setSearchQuery] = useState<string>('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const data = await getAppointments();
//                 setAppointments(data);
//             } catch (error) {
//                 console.error('Error fetching appointments:', error);
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const handleSearch = async (query: string) => {
//         try {
//             const data = await searchAppointments(query);
//             setAppointments(data);
//         } catch (error) {
//             console.error('Error searching appointments:', error);
//         }
//     };

//     const handleDeleteAppointment = async (id: string) => {
//         if (!window.confirm('Are you sure you want to delete this appointment?')) {
//             return;
//         }

//         try {
//             await deleteAppointment(id);
//             setAppointments(appointments.filter((appointment) => appointment._id !== id));
//         } catch (error) {
//             console.error('Error deleting appointment:', error);
//         }
//     };

//     const handleUpdateAppointment = (id: string) => {
//         navigate(`/appointments/update/${id}`);
//     };

//     const handleViewAppointment = (id: string) => {
//         navigate(`/appointments/${id}`);
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Appointments</h1>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search appointments..."
//                     value={searchQuery}
//                     onChange={(e) => {
//                         setSearchQuery(e.target.value);
//                         handleSearch(e.target.value);
//                     }}
//                     className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//             </div>
//             <ul className="space-y-4">
//                 {appointments.map((appointment) => (
//                     <li key={appointment._id} className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center transition-transform transform hover:scale-105">
//                         <div>
//                             <p className="font-semibold text-xl text-gray-900">{appointment.name}</p>
//                             <p className="text-gray-600">{appointment.service}</p>
//                             <p className="text-sm text-gray-500">
//                                 {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
//                             </p>
//                             <p className="text-gray-600">Phone: {appointment.phoneNumber}</p>
//                             <p className="text-gray-600">Concern: {appointment.concern}</p>
//                         </div>
//                         <div className="space-x-4">
//                             <button
//                                 className="text-gray-500 hover:text-gray-700 transition-colors"
//                                 onClick={() => handleViewAppointment(appointment._id)}
//                             >
//                                 <FontAwesomeIcon icon={faEye} size="lg" />
//                             </button>
//                             <button
//                                 className="text-gray-500 hover:text-gray-700 transition-colors"
//                                 onClick={() => handleUpdateAppointment(appointment._id)}
//                             >
//                                 <FontAwesomeIcon icon={faEdit} size="lg" />
//                             </button>
//                             <button
//                                 className="text-gray-500 hover:text-gray-700 transition-colors"
//                                 onClick={() => handleDeleteAppointment(appointment._id)}
//                             >
//                                 <FontAwesomeIcon icon={faTrashAlt} size="lg" />
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default AppointmentList;
