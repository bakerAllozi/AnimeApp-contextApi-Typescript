import { faEye, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePosts } from "../AnimeContext";
import Loading from "./loading";

export default function AnimeTop() {
  const [showAll, setShowAll] = useState(false);
  const [showAll2, setShowAll2] = useState(false);
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
                style={
                  showAll
                    ? { transform: "rotate(270deg)", color: "yellow" }
                    : { transform: "rotate(0deg)", color: "yellow" }
                }
              />
            </p>
            <div className={showAll ? "AnimeTop2" : "AnimeTop"}>
              {obj?.map((arr, i) => (
                <Animes
                  data={arr}
                  num={i}
                  handleDetails={handleDetails}
                  key={arr.mal_id}
                >
                  <>
                    <img src={arr.images.jpg.image_url} alt="" />
                    <div className="block">
                      <h3>{arr.title}</h3>
                      <p>
                        <FontAwesomeIcon icon={faEye} />
                        <span>{arr.members} </span>
                      </p>
                    </div>
                  </>
                </Animes>
              ))}
            </div>
          </div>
        )}
      </div>
      {showAll ? (
        ""
      ) : (
        <div>
          {isLod ? (
            <Loading />
          ) : (
            <div className="Fanime">
              <p>Top Anime</p>
              <p onClick={() => setShowAll2((showAll2) => !showAll2)}>
                {!showAll ? "Show All" : "Show Less"}{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={
                    showAll
                      ? { transform: "rotate(270deg)", color: "yellow" }
                      : { transform: "rotate(0deg)", color: "yellow" }
                  }
                />
              </p>

              <div className={showAll2 ? "AnimeTop2" : "AnimeTop"}>
                {obj?.map((arr, i) => (
                  <Animes
                    data={arr}
                    num={i}
                    handleDetails={handleDetails}
                    key={arr.mal_id}
                  >
                    <>
                      <img src={arr.images.jpg.image_url} alt="" />
                      <div className="block">
                        <h3>{arr.title}</h3>
                        <p>
                          <FontAwesomeIcon icon={faEye} />
                          <span>{arr.members} </span>
                        </p>
                      </div>
                    </>
                  </Animes>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Animes({ data, num, handleDetails, children }) {
  return (
    <div className="Animes" onClick={() => handleDetails(data)}>
      <span>TOP {num + 1}</span>
      {children}
    </div>
  );
}
