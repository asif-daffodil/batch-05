import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AdminLayout from "./layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/shop",
            element: <Shop />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/blog",
            element: <Blog />
        }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
        {
            path: "/admin/dashboard",
            element: <div>Dashboard</div>
        },
        {
            path: "/admin/all-products",
            element: <div>All products</div>
        },
        {
            path: "/admin/add-products",
            element: <div>Add products</div>
        },
        {
            path: "/admin/orders",
            element: <div>Orders</div>
        }
    ]
  }
]);

export default router