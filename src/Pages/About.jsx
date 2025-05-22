import React from 'react';
import { useLoaderData } from 'react-router';

const About = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-6 px-[20px] lg:px-[50px] mb-4'>
            {
                data.map((item, index)=> 
                    <div key={index} className="card bg-primary text-primary-content">
                <div className="card-body ">
                  <h2 className="card-title">{item.heading}</h2>
                  <p>{item.content}</p>
                  <div className="card-actions justify-end">
                    
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default About;