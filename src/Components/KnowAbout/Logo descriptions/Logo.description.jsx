import React from "react";
import "./Logo.description.scss";
export const LogoDescription = ({ heading, des, link }) => {
  return (
    <div className="Logodescription">
      <div className="heading">
        <h1>{heading}</h1>
      </div>
      <div className="Des">
        <p>{des}</p>
      </div>
      <button>
        <a href={link}>Know more</a>
      </button>
    </div>
  );
};
