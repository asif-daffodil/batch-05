import { Outlet } from "react-router";
import Header from "../componnets/admin/Header";
import SideBar from "../componnets/admin/SideBar";


const AdminLayout = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBar />
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;