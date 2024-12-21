import AddToWatchList from "./AddToWatchList.js";
import { usePosts } from "../AnimeContext.js";

export default function Details() {
  const { anime, handleAddWatched, watched } = usePosts();

  return (
    <>
      {anime === "" ? (
        <p className="Please-select">Please select Anime!!!</p>
      ) : (
        <div className="dad">
          <div className="Details">
            <img src={anime.images.jpg.image_url} alt="" />
            <div className="text">
              <h2>{anime.title}</h2>
              <p>• {anime.duration} </p>
              <p>• {anime.type}</p>
              <p>
                • <span>⭐️</span>
                {anime.score} Ratin
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
            {anime.synopsis.split(",").slice(0, 2).join(",") + "..."}
          </p>
          <AddToWatchList
            handleAddWatched={handleAddWatched}
            anime={anime}
            watched={watched}
          />
        </div>
      )}
    </>
  );
}
