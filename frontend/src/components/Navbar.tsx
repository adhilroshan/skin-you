import * as React from "react";
import NavItem from "./NavItem";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [navOpen, setNavOpen] = React.useState(false);
    const navItems = ["Home", "Treatments", "Skin & FAQ", "Medical Clinic", "Photogallery", "Media", "About Us", "Contact"];
    return (
        <nav
            className="flex items-center rounded-b-2xl justify-around w-full shadow-lg  text-sm p-2 px-5 font-bold  bg-white    ">
            <img className="object-contain py-2 w-40 lg:w-60" src={logo} alt="logo" />
            <div className="lg:flex text-[#111]  hidden">
                {navItems.map((item) => (
                    <NavItem key={item} text={item} />
                ))}
            </div>
            <div className="relative inset-y-0 left-0 flex items-center lg:hidden">
                <button onClick={() => setNavOpen(!navOpen)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-amber-400 hover:bg-amber-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    {
                        navOpen ?
                            (

                                <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )
                    }
                </button>
                {navOpen && (

                    <div className="lg:hidden bg-white absolute right-0 z-10 origin-top-right py-1 top-10" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navItems.map((item) => (
                                <Link to='/' className="block rounded-md text-amber-700 px-3 py-2 text-base font-medium hover:bg-amber-700 hover:text-white" aria-current="page">{item}</Link>
                            ))}
                            {/* <NavItem key={item} text={item} /> */}




                            {/* <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
                        </div>
                    </div>

                )}
            </div>
            {/* <div className="relative ml-3">

                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                </div>
            </div> */}

        </nav >
    );
};

export default Navbar;
