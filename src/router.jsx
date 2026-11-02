import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SendCode from "./pages/SendCode/SendCode";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ProductDetails from "./pages/Product Details/ProductDetails";

import ProductsPage from './pages/Products/ProductsPage';
import CategoriesPage from './pages/Categories/CategoriesPage';

const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            { path: 'products', element: <ProductsPage /> },
            { path: 'categories', element: <CategoriesPage /> },
            { path: 'categories/:id', element: <ProductsPage /> },
            {
                index:true,element:<Home/>
            },
            {
                path:'products/:id',element:<ProductDetails/>
            }
        ]
    },
    {
    element:<AuthLayout/>,
    children:[
    {
        path:'/login',element:<Login/>
    },
    {
        path:'/register',element:<Register/>
    },
    { path:'/send-code',element:<SendCode/> },
    { path:'/reset-password',element:<ResetPassword/> }
]

    }

]);

export default router;
