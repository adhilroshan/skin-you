import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    // const navigate = useNavigate();

    // // const handleSearchClick = () => {
    //     navigate('/search');
    // };
    console.log(currentPath);
    const items = [{
        name: 'Book Appointment',
        endpoint: '/book',
    },
    {
        name: 'View Appointments',
        endpoint: '/appointments',
    }
    ]
    return (
        <header className="border-amber-600 border  bg-transparent drop-shadow-md shadow-lg -mt-5 mb-4 text-white  rounded-3xl md:mx-52">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center ">
                <ul className="flex justify-between w-full">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.endpoint} className={`px-4 py-2 rounded-2xl ${currentPath === item.endpoint ? 'bg-amber-600 text-white' : 'text-amber-600 hover:border-amber-600 border-transparent border'}`}>{item.name}</Link>
                        </li>
                    ))}
                    {/* <li><Link to="/book" className="text-amber-600 transition-all duration-150 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-2xl ">Book Appointment</Link></li>
                    <li><Link to="/book" className="text-amber-600 transition-all duration-150 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-2xl ">Book Appointment</Link></li>
                    <li><Link to="/appointments" className="text-amber-600 transition-all duration-150 hover:bg-amber-600 hover:text-white px-4 py-2 rounded-2xl ">View Appointments</Link></li> */}
                </ul>
                {/* <button onClick={handleSearchClick} className="hover:text-amber-200">
                    <FontAwesomeIcon icon={faSearch} />
                </button> */}
            </nav>
        </header>
    );
}

export default Header;
