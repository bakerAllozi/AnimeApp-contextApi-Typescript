import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext";

function WatchList() {
  const { setIsC } = usePosts();

  return (
    <div
      className="WatchList"
      onClick={() => setIsC((isC) => !isC)}
      style={{ color: "white" }}
    >
      <FontAwesomeIcon icon={faList} />
      <p>Watch list</p>
    </div>
  );
}
export default WatchList;
