import React from "react";
import TitleCard from "../components/TitleCard";
import Carousel from "../components/Carousel";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Carousel />
      <TitleCard />
    </div>
  );
};

export default HomePage;
