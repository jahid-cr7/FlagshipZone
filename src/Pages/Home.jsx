import React, { use, useState } from "react";
import Hero from "./Hero";
import PhoneContainer from "./PhoneContainer";
import PhoneDetails from "./PhoneDetails";

const Home = ({ LoadHome }) => {
  const MobileData = use(LoadHome);
  
  const [phones, setPhones] = useState(MobileData);

  const handleSearch = (event, text) => {
    event.preventDefault();
    if (text === "") {
      setPhones(MobileData);
      return;
    }
    const searchedPhones = MobileData.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchedPhones);
  };

  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>

      <PhoneContainer MobileData={phones}></PhoneContainer>
    </div>
  );
};

export default Home;
