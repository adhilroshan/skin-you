import React from 'react';
// import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className='h-full flex flex-col gap-4'>
            <HeroSection />
            <Footer />
        </div>
    );
}

export default Home;
