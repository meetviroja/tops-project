import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register'

// import Logandreg from './components/Logandreg';
import Error from './components/comcomponent/Error';
import Adminpenal from './components/Adminpenal';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Concat from './components/Concat';




const MainRoutes = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    }, {
        path: "/About",
        element: <About />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/Error",
        element: <Error />
    }, {
        path: "/adminpenal",
        element: <Adminpenal />
    },
    {
        path: "/Login",
        element: <Login />
    },{
        path:"/admin",
        element: <Admin />
    },{
        path:"/logout",
        element: <Logout />
    },{
        path:"/concat",
        element: <Concat />
    }

])
export default MainRoutes;