import { Outlet } from "react-router";
import Footer from "../componnets/Footer";
import Header from "../componnets/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;