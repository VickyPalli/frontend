import React from "react";
import { expertsCard } from "../utils/helper";

const OurExperts = () => {
  return (
    <div className="expertsContainer">
      <h1 className="text-3xl text-center">Our Experts</h1>
      <div className="experts">
        {expertsCard.map((data: any, index: number) => (
          <div key={index + data.id} className="expertCard">
            <div className="profileSection">
              <img src={data.image} alt="profile" />
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#1a7eba",
                fontSize: "30px",
              }}
            >
              {data.name}
            </div>
            <div
              style={{ textAlign: "center", color: "#f60", fontSize: "20px" }}
            >
              {data.position}
            </div>
            <div>{data.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurExperts;
