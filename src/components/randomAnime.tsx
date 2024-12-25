import React from "react";

import { faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePosts } from "../AnimeContext.tsx";
import Loading from "./loading.tsx";

export default function RandomAnime() {
  interface AnimeTopApi {
    images: {
      webp: {
        image_url: string;
      };
    };
    title: string;
    rating: string | number;
  }

  const { animeTopApi, isLod } = usePosts();

  if (!animeTopApi || typeof animeTopApi !== "object") return null;

  return (
    <>
      {isLod ? (
        <Loading />
      ) : (
        <div className="RandomAnime">
          <img
            src={(animeTopApi as AnimeTopApi).images.webp.image_url}
            alt={(animeTopApi as AnimeTopApi).title || "Anime"}
          />
          <div className="text">
            <FontAwesomeIcon
              icon={faAudioDescription}
              style={{ color: "#eee" }}
            />
            <div className="info">
              <span>
                <p className="p1">
                  <span>Pro</span> {(animeTopApi as AnimeTopApi).title}
                </p>
                <p className="p2"> {(animeTopApi as AnimeTopApi).rating}</p>
              </span>
            </div>
            <button className="buttonR">View details</button>
          </div>
        </div>
      )}
    </>
  );
}
