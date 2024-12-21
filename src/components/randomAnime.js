import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext";
import Loading from "./loading";

export default function RandomAnime() {
  const { animeTopApi, isLod } = usePosts();
  if (!animeTopApi) return;

  return (
    <>
      {isLod ? (
        <Loading />
      ) : (
        <div className="RandomAnime">
          <img src={animeTopApi.images.webp.image_url} alt="" />
          <div className="text">
            <FontAwesomeIcon
              icon={faAudioDescription}
              style={{ color: "#eee" }}
            />
            <div className="info">
              <span>
                <p className="p1">
                  <span>Pro</span> {animeTopApi.title}
                </p>
                <p className="p2"> {animeTopApi.rating}</p>
              </span>
            </div>
            <button className="buttonR">View details</button>
          </div>
        </div>
      )}
    </>
  );
}
