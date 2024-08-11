import * as React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
    return (
        <div className="flex flex-col     w-auto">
            <Link to='/' className="px-4  cursor-pointer w-full hover:text-amber-500">
                {text}

            </Link>
        </div>
    );
};

export default NavItem;
