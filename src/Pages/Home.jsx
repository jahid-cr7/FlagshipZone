import React, { use, useState } from "react";
import Hero from "./Hero";
import PhoneContainer from "./PhoneContainer";
import PhoneDetails from "./PhoneDetails";

const Home = ({ LoadHome }) => {
  const MobileData = use(LoadHome);
  console.log(MobileData);
  const [phones, setPhones] = useState(MobileData);

  const handleSearch = (event, text) => {
    event.preventDefault();

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
      <PhoneDetails></PhoneDetails>
    </div>
  );
};

export default Home;
