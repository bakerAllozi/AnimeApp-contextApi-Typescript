function AnimeBlock({ dataSearch }) {
  return (
    <div className="AnimeBlock">
      <img src={dataSearch.Poster} alt="" />
      <h5>{dataSearch.Title.split(" ").slice(0, 3).join(" ")}</h5>
      <h6>{dataSearch.Type}</h6>
      <span>{dataSearch.Year}</span>
    </div>
  );
}

export default AnimeBlock;
