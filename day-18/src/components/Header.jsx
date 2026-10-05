import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="flex gap-4 p-5 *:[.active]:text-blue-600">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
};

export default Header;