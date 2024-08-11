import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import Header from '../components/Header';

const BookAppointment: React.FC = () => {
    return (
        <div>
            <Header />
            {/* Add your component content here */}
            <AppointmentForm />
        </div>
    );
};

export default BookAppointment;
