import React from 'react';
// import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
    return (
        <HeroSection />
        // <div className="text-center">
        //     <h1 className="text-4xl font-bold mb-4">Welcome to our Appointment Booking System</h1>
        //     <p className="mb-8">Schedule your appointment today for a hassle-free experience.</p>
        //     <Link to="/book" className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700">
        //         Book an Appointment
        //     </Link>
        // </div>
    );
}

export default Home;
