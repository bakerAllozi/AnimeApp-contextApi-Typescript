import React from "react";
import { usePosts } from "../AnimeContext.tsx";
import Navecation from "./Navecation.tsx";
import SearchPage from "./SearchPage.tsx";
import AnimeTop from "./animeTop.tsx";
import RandomAnime from "./randomAnime.tsx";

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
            <AnimeTop />
          </>
        )}
      </>
    </div>
  );
}

export default FirstPart;
