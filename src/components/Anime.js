import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext";

function Anime({ watched }) {
  const { handleRemoveWatched } = usePosts();

  return (
    <div className="Anime">
      <span className="close" onClick={() => handleRemoveWatched(watched)}>
        <FontAwesomeIcon icon={faClose} />
      </span>
      <img src={watched.images.jpg.image_url} alt="" />
      <div className="text">
        <p style={{ fontSize: "15px" }}>{watched.title}</p>
        <p>
          <span> {watched.score}⭐️ </span>
          <span>{watched.type}</span>
          <span>⏳{watched.duration.split(" ").slice(0, 2).join(" ")}</span>
        </p>
      </div>
    </div>
  );
}

export default Anime;
