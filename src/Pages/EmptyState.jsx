import React from 'react';
import { Link } from 'react-router';

const EmptyState = () => {
    return (
        <div className='py-56 text-center'>
            <h1 className='mb-3 text-7xl work font-thin text-gray-100'>No Data Found</h1>
            <p className='mb-8 text-xl text-gray-200 md:text-2xl'>Browse, Search, Phones, Add to Cart, Favourites</p>
            <Link className='hover:bg-amber-500 border-2 border-amber-500 py-3 text-white px-6 hover:px-18 hover:duration-500 rounded-2xl  hover:text-black share text-xl' to={'/'}>Browse Phone</Link>

        </div>
    );
};

export default EmptyState;