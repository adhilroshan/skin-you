import React from 'react';
import AppointmentList from '../components/AppointmentList';
import Header from '../components/Header';

const ViewAppointments: React.FC = () => {
    return (
        <div>
            <Header />
            <AppointmentList />
        </div>
    );
};

export default ViewAppointments;
