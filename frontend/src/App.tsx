import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import ViewAppointments from './pages/ViewAppointments';
// import SearchBar from './components/SearchBar'; // Import the SearchBar component
import UpdateAppointment from './pages/UpdateAppointment'; // Import the UpdateAppointment page
import AppointmentDetails from './pages/AppointmentDetails'; // Import the AppointmentDetails page
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* <Header /> */}
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/book" element={<BookAppointment />} />
                        <Route path="/appointments" element={<ViewAppointments />} />
                        <Route path="/appointments/:id" element={<AppointmentDetails />} /> {/* Add the details route */}
                        <Route path="/appointments/update/:id" element={<UpdateAppointment />} /> {/* Add the update route */}
                    </Routes>
                </main>
                {/* <Footer /> */}
            </div>
        </Router>
    );
};

export default App;
