import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PhoneContainer = ({ MobileData }) => {
const [displayMobile, setDisplayMobile] = useState([]);
const [showAll, setShowAll] = useState(false);
useEffect(() => {
  if(showAll){
    setDisplayMobile(MobileData);
  }else{
   setDisplayMobile(MobileData.slice(0, 6));
  }
}, [MobileData, showAll]);



  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {displayMobile.map((mobile) => (
          <div key={mobile.id} className="card bg-base-100 shadow-sm ">
            <figure className="">
              <img
                src={mobile.image}
                alt="Shoes"
                className="bg-amber-50  object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title work">{mobile.name}</h2>

              <p>{mobile.description}</p>
              <p>{mobile.storage}</p>
              <div className="card-actions justify-end">
                <Link
                  to={"PhoneDetails"}
                  className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-amber-600 text-black"
                >
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-amber-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-white transition duration-300 group-hover:text-black work ease">
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setShowAll((prv) => !prv);
          if (showAll) window.scrollTo(0, 0);
        }}
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-2xl group mb-7"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-amber-500 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-amber-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white ">
          {showAll ? "SHOW LESS" : "SHOW ALL"}
        </span>
      </button>
    </div>
  );
};

export default PhoneContainer;
