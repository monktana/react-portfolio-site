import React from "react";

export type ChapterProps = {
  avatar: string,
  text: string,
};

export const Chapter = ({avatar, text}: ChapterProps) => {
  return (
    <div className="narrative">
      <div className="avatar">
        <img src={`images/${avatar}.png`} alt="avatar" />
      </div>
      <span>
        {text}
      </span>
    </div>
  );
}