import { Bookmark, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { addFavorite } from "../Utilities";
const PhoneDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone);

  const handleFavorrite = () => {
    addFavorite(singlePhone);
  };

  return (
    <div className="mt-5">
      <img
        src={singlePhone.image}
        alt=""
        className="w-full mx-auto md:max-w-md"
      />

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold py-4">{singlePhone.name}</h1>
          <div className="flex gap-4">
            <button class="relative inline-flex items-center justify-center p-2 px-2 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                <FaCartPlus size={22} />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Cart
              </span>
              <span class="relative invisible">Button Text</span>
            </button>
            <button
              onClick={handleFavorrite}
              class="relative inline-flex items-center justify-center p-2 px-2 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                <MdBookmarkAdd size={22} />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Bookmark
              </span>
              <span class="relative invisible">Button Text</span>
            </button>
          </div>
        </div>
        <h1 className="text-4xl text-green-300 mt-3">Details:</h1>
        <h1 className="text-[20px] mt-3">Brand: {singlePhone.brand}</h1>
        <p>Model: {singlePhone.model}</p>
      </div>
    </div>
  );
};

export default PhoneDetails;
