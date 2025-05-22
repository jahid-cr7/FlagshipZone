import React, { useEffect, useState } from 'react';
import { getfavorite, removeFavorite } from '../Utilities';
import { Link } from 'react-router';
import { IoMdClose } from "react-icons/io";
import EmptyState from './EmptyState';

const Favourite = () => {
    const [displayMobile, setDisplayMobile] = useState([]);
    useEffect(()=>{
        const savePhones = getfavorite();
        setDisplayMobile(savePhones);
    },[])
    const handleRemove =(id) =>{
        removeFavorite(id);
        setDisplayMobile(getfavorite());
    }
    if(displayMobile.length === 0){
        return <EmptyState/>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {displayMobile.map((phones) => (
                <div key={phones.id} phones = {phones} className="card bg-base-100 shadow-sm</div>">
                    <figure>
                        <img
                            src={phones.image}
                            alt="Shoes"
                            className="bg-amber-50 object-cover"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title work">{phones.name}</h2>
                        <p>{phones.description}</p>
                        <p>{phones.storage}</p>
                        <div className="card-actions justify-end">
                            <Link
                                to={`PhoneDetails/${phones.id}`}
                                className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-amber-600 text-black"
                            >
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-amber-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-white transition duration-300 group-hover:text-black work ease">
                                    View Details
                                </span>
                            </Link>
                        </div>
                        <div onClick={()=> handleRemove(phones.id)} className='absolute -top-3 -right-3 bg-gray-400 p-2 rounded-full cursor-pointer hover:bg-amber-100 group'>
                            <IoMdClose className='group-hover:text-black'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Favourite;