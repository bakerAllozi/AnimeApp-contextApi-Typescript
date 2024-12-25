import React from "react";
import AddToWatchList from "./AddToWatchList.tsx";
import { usePosts } from "../AnimeContext.tsx";
import { AnimeType } from "../types";

const Details: React.FC = () => {
  const { anime } = usePosts();

  if (!anime) {
    return <p className="Please-select">Please select Anime!!!</p>;
  }

  const animeDetails = anime as AnimeType;

  const imageUrl = animeDetails.images?.jpg?.image_url || "";

  return (
    <div className="dad">
      <div className="Details">
        {imageUrl ? (
          <img src={imageUrl} alt={animeDetails.title} />
        ) : (
          <p>No image available</p>
        )}
        <div className="text">
          <h2>{animeDetails.title}</h2>
          <p>• {animeDetails.duration}</p>
          <p>• {animeDetails.type}</p>
          <p>
            • <span>⭐️</span>
            {animeDetails.score} Rating
          </p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "900",
          color: "white",
        }}
      >
        {animeDetails.synopsis.split(".").slice(0, 2).join(".") + "..."}
      </p>
      <AddToWatchList />
    </div>
  );
};

export default Details;
