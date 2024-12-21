import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext";

function Search() {
  const { setSearchAnime, searchAnime, setIsR } = usePosts();

  function handelOnChange(e) {
    setIsR(true);
    setSearchAnime(e.target.value);
  }
  return (
    <div className="search">
      <input
        type="text"
        className="searchInput"
        placeholder="search here..."
        value={searchAnime}
        onChange={(e) => handelOnChange(e)}
      />
      <FontAwesomeIcon icon={faSearch} className="faSearch" />
    </div>
  );
}

export default Search;
