import React, { use } from 'react';
import Hero from './Hero';
import PhoneContainer from './PhoneContainer';
import PhoneDetails from './PhoneDetails';



const Home = ({LoadHome}) => {
const handleSearch = (e, text)=>{
    e.preventDefault();
    console.log(text);
}
const MobileData = use(LoadHome);
console.log(MobileData);
    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero> 
            
            <PhoneContainer MobileData= {MobileData}></PhoneContainer>
            <PhoneDetails></PhoneDetails>
        </div>
    );
};

export default Home;