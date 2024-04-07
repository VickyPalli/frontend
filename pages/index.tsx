import React from "react";
import TitleCard from "../components/TitleCard";
import Carousel from "../components/Carousel";
import OurExperts from "../components/Experts";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Carousel />
      <TitleCard />
      <OurExperts />
    </div>
  );
};

export default HomePage;
