import React, { useState } from "react";
import banner from "../assets/images/banner.png";
import { IoSearchSharp } from "react-icons/io5";
const Hero = ({handleSearch}) => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <div>
      <img src={banner} alt="" className="w-full mx-auto md:max-w-md mt-10" />
      <div>
        <h1 className="text-center mt-4 text-2xl md:text-4xl lg:text-6xl work font-semibold">
          Browse, Search, View, Buy
        </h1>
        <p className="text-center mt-2 text-gray-400">
          Best place to browse, search, view details and purchase of top
          flagship phones of the current time - FlagshipFaceOff
        </p>
      </div>
      <form className="flex lg:flex-row md:flex-row flex-col justify-center items-center mt-10 gap-3">
        <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
          type="text"
          name="SearchBar"
          placeholder="Search Phone"
          className="w-2/3 border-2 rounded-full px-4 py-2 share"
        />
        <button
          type="submit"
          className="relative inline-flex items-center px-8 md:px-12 lg:px-12 py-1 md:py-2 lg:py-2 overflow-hidden text-lg font-medium text-white border-2 border-amber-500 rounded-full hover:text-white group hover:bg-gray-50"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-amber-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <IoSearchSharp className="md:block lg:block hidden" size={16} />
          </span>
          <span className="relative share">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
