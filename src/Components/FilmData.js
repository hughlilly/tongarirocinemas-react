import React from "react";

function FilmData(props) {
  return (
    <div className="film-data pb-5">
      <h3 className="film-title text-xl italic text-center pb-1">
        {props.title}
      </h3>
      <div className="film-metadata text-sm text-center">
        Directed by {props.director} · {props.releaseYear} · {props.runtime}
        &nbsp; mins.
      </div>
    </div>
  );
}

export default FilmData;
