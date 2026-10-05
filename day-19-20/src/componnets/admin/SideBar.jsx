import { NavLink } from "react-router";


const SideBar = () => {
    return (
        <div className="w-64 bg-stone-600 min-h-screen text-white flex flex-col p-4 *:p-2 *:[.active]:bg-stone-500">
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
            <NavLink to="/admin/all-products">All products</NavLink>
            <NavLink to="/admin/add-products">Add products</NavLink>
            <NavLink to="/admin/orders">Orders</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
};

export default SideBar;