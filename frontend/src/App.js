import React from "react";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';
import ErrorPage from './Pages/ErrorPage';
import MovieList from './Components/MovieList';
import Register from './Components/Register';
import RegisterConfirmation from "./Pages/RegisterConfirmation";
import Login from './Components/Login';
import LoginConfirmation from "./Pages/LoginConfirmation";
import User from "./Components/User";
import Logout from "./Components/Logout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path:'movies',
                element: <MovieList />
            },
            {
                path:'register',
                element: <Register />
            },
            {
                path:'registerConfirmation',
                element: <RegisterConfirmation />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'loginConfirmation',
                element: <LoginConfirmation />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'logout',
                element: <Logout />
            }
        ],
},
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;