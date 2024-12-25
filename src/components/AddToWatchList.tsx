import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext.tsx";
import React from "react";
import { AnimeType } from "../types";

export default function AddToWatchList() {
  const { handleAddWatched, anime, watched } = usePosts();
  const animeDetails = anime as AnimeType;

  return (
    <div
      className="AddToWatchList"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <>
        {watched
          .map((al: AnimeType) => al.mal_id)
          .includes(animeDetails.mal_id) ? (
          <p style={{ color: "white" }}>
            added to list
            <FontAwesomeIcon icon={faCheck} style={{ color: "yellow" }} />
          </p>
        ) : (
          <button onClick={() => handleAddWatched(animeDetails)}>
            + Add to list
          </button>
        )}
      </>
    </div>
  );
}
