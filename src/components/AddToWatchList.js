import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext";

export default function AddToWatchList() {
  const { handleAddWatched, anime, watched } = usePosts();

  return (
    <div
      className="AddToWatchList"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <>
        {watched.map((al) => al.mal_id).includes(anime.mal_id) ? (
          <p style={{ color: "white" }}>
            added to list
            <FontAwesomeIcon icon={faCheck} style={{ color: "yellow" }} />
          </p>
        ) : (
          <button onClick={() => handleAddWatched(anime)}>+ Add to list</button>
        )}
      </>
    </div>
  );
}
