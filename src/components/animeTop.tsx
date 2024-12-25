import { faEye, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { usePosts } from "../AnimeContext.tsx";
import Loading from "./loading.tsx";
import { AnimeType } from "../types.ts";

export default function AnimeTop() {
  const [showAll, setShowAll] = useState(false);
  const { isLod, handleDetails, obj } = usePosts();

  return (
    <div className="animeP">
      <div>
        {isLod ? (
          <Loading />
        ) : (
          <div className="Fanime">
            <p>Top Anime</p>
            <p onClick={() => setShowAll((showAll) => !showAll)}>
              {!showAll ? "Show All" : "Show Less"}{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{
                  transform: showAll ? "rotate(270deg)" : "rotate(0deg)",
                  color: "yellow",
                }}
              />
            </p>
            <div className={showAll ? "AnimeTop2" : "AnimeTop"}>
              {obj?.map((arr: AnimeType, i) => (
                <Animes
                  data={arr}
                  num={i}
                  handleDetails={handleDetails}
                  key={arr.mal_id}
                >
                  <img src={arr.images.jpg.image_url} alt={arr.title} />
                  <div className="block">
                    <h3>{arr.title}</h3>
                    <p>
                      <FontAwesomeIcon icon={faEye} />
                      <span>{arr.members}</span>
                    </p>
                  </div>
                </Animes>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Animes({
  data,
  num,
  handleDetails,
  children,
}: {
  data: AnimeType;
  num: number;
  handleDetails: Function;
  children: React.ReactNode;
}) {
  return (
    <div className="Animes" onClick={() => handleDetails(data)}>
      <span>TOP {num + 1}</span>
      {children}
    </div>
  );
}
