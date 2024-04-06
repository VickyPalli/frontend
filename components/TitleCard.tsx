import React from "react";
import Image from "next/image";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { titleCardsData } from "../utils/helper";

const TitleCard: React.FC = (): JSX.Element => {
  console.log(titleCardsData.length);
  return (
    <div>
      <div className="flex items-center justify-between w-2/4 m-auto">
        <div className="text-6xl text-cyan-400">We believe in Education</div>
        <div>
          <Image src="/child.webp" alt="logo" width={800} height={800} />
        </div>
      </div>
      <div className="flex px-5">
        {titleCardsData.map((data, index) => {
          return (
            <div
              key={index + "section"}
              className="flex flex-col items-center justify-between w-1/4 py-7 px-4 gap-4"
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
