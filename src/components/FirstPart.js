import { usePosts } from "../AnimeContext";
import Navecation from "./Navecation";
import SearchPage from "./SearchPage";
import AnimeTop from "./animeTop";
import RandomAnime from "./randomAnime";

function FirstPart() {
  const { searchAnime, isR } = usePosts();

  return (
    <div className="first-part">
      <Navecation />
      <>
        {searchAnime && isR ? (
          <SearchPage />
        ) : (
          <>
            <RandomAnime />

            <AnimeTop />
          </>
        )}
      </>
    </div>
  );
}

export default FirstPart;
