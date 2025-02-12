import Home from './pages/home'
import Userlist from './components/userlist'
import Newuser from './pages/newuser'
import Products from './pages/product'


let routes = [
    { path: '/', element: <Home /> },
    { path: '/user', element: <Userlist /> },
    { path: '/newuser', element: <Newuser /> },
    { path: '/products' , element: <Products />}
]

export default routes;