import { createBrowserRouter } from 'react-router-dom';

// * Layout
import MainLayout from '../layouts/MainLayout';
// * Pages 
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import About from '../pages/about/about';
// * 404 Not found
import NotFound from '../pages/NotFound';


export const router = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout />, 
    children: [
        // * Main pages
        { index: true, element: <Home /> }, 
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        // * 404 Not found
        { path: '*', element: <NotFound /> },
    ],
    },
]);