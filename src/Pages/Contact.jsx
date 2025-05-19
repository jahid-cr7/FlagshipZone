import React from "react";
import { useLoaderData } from "react-router";

const Contact = () => {
  const data = useLoaderData();
//   const [company_name, address, contact_email, contact_phone, website] = data;
  return (
    <div className="card w-3/4 lg:mt-40 mx-auto">
      <div className="card-body text-amber-300 lg:mt-5 text-center rounded-2xl">
        <h2 className="text-center lg:text-5xl work">Company Name: {data.company_name}</h2>
        <p className="lg:text-[30px] work">Address: {data.address}</p>
        <p className="lg:text-[30px] work">Email: {data.contact_email}</p>
        <p className="lg:text-[30px] work">Phone: {data.contact_phone}</p>
        <p className="lg:text-[30px] work">Website: {data.website}</p>
        
      </div>
    </div>
  );
};

export default Contact;
