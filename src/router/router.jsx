import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Hero from '../Pages/Hero';
import PhoneContainer from '../Pages/PhoneContainer';
import PhoneDetails from '../Pages/PhoneDetails';

const LoadHome = fetch('Mobiles.json').then(res => res.json())

export const route = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <div>404 Not Found</div>,
        children:[
            {
                path: '/',
            
                element: <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                    <Home LoadHome= {LoadHome}></Home>
                </Suspense>
            },
            {
                path:"About",
                loader: ()=> fetch('About.json'),
                Component: About,
            },
            {
                path:"Contact",
                loader: ()=> fetch('Contact.json'),
                Component: Contact,
            },
            {
                path:"PhoneDetails",
                Component: PhoneDetails,
            }
  
            
        ]
    },
])
const router = () => {
    return (
        <div>
            
        </div>
    );
};

export default router;