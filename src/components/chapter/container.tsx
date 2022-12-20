import React from "react";
import { Chapter, ChapterProps } from "./chapter";
import "./chapter.css";

type ChapterContainerProps = {
  id: number,
  next: number | null,
  previous: number | null,
  navigateTo: React.Dispatch<React.SetStateAction<number>>,
  content: ChapterProps
};

export const ChapterContainer = ({next, previous, navigateTo, content}: ChapterContainerProps) => {
  return (
    <div className="chapter">
    { 
      previous && 
      <div className="buttonBack">
        <button className="navButton" type="button" onClick={() => navigateTo(previous)}>{"<"}</button>
      </div>
    }
      <Chapter {...content} />
    { 
      next && 
      <div className="buttonBack">
        <button className="navButton" type="button" onClick={() => navigateTo(next)}>{">"}</button>
      </div>
    }
    </div>
  );
}