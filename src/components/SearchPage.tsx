import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimeBlock from "./AnimeBlock.tsx";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Err from "./Err.tsx";
import Loading from "./loading.tsx";
import { usePosts } from "../AnimeContext.tsx";
import { AnimeType } from "../types.ts";

function SearchPage() {
  const { setIsR, nameAnime, searchAnime, natFound, isLod2 } = usePosts();
  const nameAnimes = nameAnime as AnimeType[];
  return (
    <div className="SearchPage">
      <FontAwesomeIcon
        icon={faClose}
        className="SearchPageClose"
        onClick={() => setIsR(false)}
      />

      {isLod2 ? (
        <Loading />
      ) : (
        <>
          {searchAnime.length < 3 && (
            <Err marginTop={"50px"}>
              You need to enter at least 3 characters to search{" "}
            </Err>
          )}
          {searchAnime.length > 2 && natFound && (
            <Err marginTop={"30px"}>Movie not found !!</Err>
          )}
          {searchAnime.length > 2 &&
            !natFound &&
            nameAnimes.map((data: AnimeType) => (
              <AnimeBlock dataSearch={data} key={data.imdbID} />
            ))}
        </>
      )}
    </div>
  );
}

export default SearchPage;
