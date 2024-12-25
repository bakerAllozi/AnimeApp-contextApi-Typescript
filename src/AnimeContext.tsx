import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimeType } from "./types";

const keyOfApi = "2878602a";
const AnimeContext = createContext<AnimeContextType | undefined>(undefined);

interface AnimeProviderProps {
  children: ReactNode;
}

interface AnimeContextType {
  isLod: boolean;
  obj: AnimeType[];
  natFound: boolean;
  nameAnime: AnimeType[] | null;
  isLod2: boolean;
  anime: AnimeType | null;
  watched: AnimeType[];
  searchAnime: string;
  isC: boolean;
  isR: boolean;
  setIsC: React.Dispatch<React.SetStateAction<boolean>>;
  setIsR: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchAnime: React.Dispatch<React.SetStateAction<string>>;
  handleDetails: (anime: AnimeType) => void;
  handleAddWatched: (anime: AnimeType) => void;
  handleRemoveWatched: (anime: AnimeType) => void;
  animeTopApi: AnimeType[];
}

function AnimeProvider({ children }: AnimeProviderProps) {
  const [isLod, setIsLod] = useState<boolean>(true);
  const [obj, setObj] = useState<AnimeType[]>([]);
  const [natFound, setNatFound] = useState<boolean>(false);
  const [nameAnime, setNameAnime] = useState<AnimeType[] | null>(null);
  const [isLod2, setIsLod2] = useState<boolean>(true);
  const [animeTopApi, setAnimeTopApi] = useState<AnimeType[]>([]);
  const [anime, setAnime] = useState<AnimeType | null>(null);
  const [watched, setWatched] = useState<AnimeType[]>([]);
  const [searchAnime, setSearchAnime] = useState<string>("");
  const [isC, setIsC] = useState<boolean>(false);
  const [isR, setIsR] = useState<boolean>(false);

  useEffect(() => {
    setIsLod(true);
    async function fetchData() {
      try {
        const [res1, res2] = await Promise.all([
          fetch("https://api.jikan.moe/v4/top/anime"),
          fetch("https://api.jikan.moe/v4/random/anime"),
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
          setNameAnime(null);
        } else {
          setNameAnime(data3.Search);
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

  function handleDetails(e: AnimeType) {
    setAnime(obj.find((arr) => arr.mal_id === e.mal_id) || null);
  }

  function handleAddWatched(ae: AnimeType) {
    const isAdd = watched.some((e) => e.mal_id === ae.mal_id);
    if (isAdd) return;

    setWatched((watched) => [ae, ...watched]);
  }

  function handleRemoveWatched(ee: AnimeType) {
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
    throw new Error("AnimeContext was used outside of the AnimeProvider");
  return context;
}

export { AnimeProvider, usePosts };
