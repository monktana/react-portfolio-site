import React from "react";
import "./container.css";

export const ChapterContainer = () => {
  return (
    <>
      <div className="buttonBack">
        <button className="navButton" type="button">{"<"}</button>
      </div>
      <div className="buttonForward">
        <button className="navButton" type="button">{">"}</button>
      </div>
      <div className="narrative">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis.
        <br/>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, suscipit.
      </div>
    </>
  );
}