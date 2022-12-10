import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const Main = () => {
    return (
        <div>
           <div className=''>
           <Header />
           </div>
         <div className=''>
         <Outlet/>
         </div>
        </div>
    );
};

export default Main;