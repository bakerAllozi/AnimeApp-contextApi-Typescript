import { createContext, useContext, useEffect, useState } from "react";
const AnimeContext = createContext();
const keyOfApi = "2878602a";
//

function AnimeProvider({ children }) {
  const [isLod, setIsLod] = useState(true);
  const [obj, setObj] = useState([]);
  const [natFound, setNatFound] = useState(false);
  const [nameAnime, setNameAnime] = useState([]);
  const [isLod2, setIsLod2] = useState(true);
  const [animeTopApi, setAnimeTopApi] = useState("");
  const [anime, setAnime] = useState("");
  const [watched, setWatched] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");
  const [isC, setIsC] = useState(false);
  const [isR, setIsR] = useState(false);

  useEffect(() => {
    setIsLod(true);
    async function fetchData() {
      try {
        const [res1, res2] = await Promise.all([
          fetch("https://api.jikan.moe/v4/top/anime"),
          fetch("https://api.jikan.moe/v4/random/anime"),
          fetch("https://api.jikan.moe/v4/anime"),
        ]);
        const data1 = await res1.json();
        const data2 = await res2.json();
        setObj(data1.data);
        setAnimeTopApi(data2.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLod(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setIsLod2(true);
    async function fetchDataMovie() {
      try {
        const res3 = await fetch(
          `https://www.omdbapi.com/?apikey=${keyOfApi}&s=${searchAnime}`
        );
        const data3 = await res3.json();
        if (data3.Response === "False") {
          setNatFound(true);
          setNameAnime({});
        } else {
          setNameAnime(data3);
          setNatFound(false);
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLod2(false);
      }
    }
    fetchDataMovie();
  }, [searchAnime]);

  function handleDetails(e) {
    setAnime(obj.filter((arr) => arr.mal_id === e.mal_id)[0]);
  }
  function handleAddWatched(ae) {
    const isAdd = watched.map((e) => e.mal_id).includes(ae.mal_id);
    if (isAdd) return;

    setWatched((watched) => [ae, ...watched]);
  }
  function handleRemoveWatched(ee) {
    setWatched((watched) => watched.filter((arr) => arr.mal_id !== ee.mal_id));
  }
  return (
    <AnimeContext.Provider
      value={{
        isLod,
        obj,
        natFound,
        nameAnime,
        isLod2,
        anime,
        watched,
        searchAnime,
        isC,
        isR,
        setIsC,
        setIsR,
        handleRemoveWatched,
        handleAddWatched,
        handleDetails,
        setSearchAnime,
        animeTopApi,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
function usePosts() {
  const context = useContext(AnimeContext);
  if (context === undefined)
    throw new Error("AnimeContext was used outside of the AnimeProvider"); //help ather programmr
  return context;
}
export { AnimeProvider, usePosts };
