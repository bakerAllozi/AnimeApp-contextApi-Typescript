import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anime from "./Anime.tsx";
import { usePosts } from "../AnimeContext.tsx";
import React from "react";

function WatchListBody() {
  const { watched, isC, setIsC } = usePosts();

  return (
    <div style={{ color: "white" }}>
      {isC && (
        <div className="WatchListBody">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="faArrowRight"
            onClick={() => setIsC((a) => !a)}
          />

          {watched.map((arr) => (
            <Anime watched={arr} key={arr.mal_id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default WatchListBody;
