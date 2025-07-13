import Product from "./components/Pages/Product";
import About from "./components/Pages/About";
import ProductID from "./components/Pages/ProductID";
import Notfound from "./components/Pages/Notfound";
import Main from "./components/Pages/Main";
import Setting from "./components/Pages/Setting"
import Dashbord from "./components/Pages/Dashbord";

let routes = [
    { path: "/", element: <Main /> },
    { path: "/*", element: <Notfound /> },

    { path: "/Product", element: <Product /> },
    { path: "/Product/:ProductID", element: <ProductID /> },

    {
        path: "/About", element: <About />, children: [
            { path: "Dashbord", element: <Dashbord /> },
            { path: "Setting", element: <Setting/> }
        ]
    }
];
export default routes;
