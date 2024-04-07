import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { titleCardsData } from "../utils/helper";

const TitleCard: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="title-card-container">
        <div className="caption-section">
          Building Foundations for Future Success
        </div>
        <div>
          <img src="/child.jpg" alt="logo" />
        </div>
      </div>
      <div className="sectionCardsContainer">
        {titleCardsData.map((data, index) => {
          return (
            <div
              key={index + "section"}
              className="sectionCard"
              style={{ backgroundColor: data.bgColor }}
            >
              <RocketLaunchIcon style={{ color: "white" }} fontSize="large" />
              <h1 className="text-3xl text-white">{data.title}</h1>
              <p className="text-white text-sm text-center">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
