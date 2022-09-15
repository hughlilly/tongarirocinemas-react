import React from "react";

function FilmInfo(props) {
  return (
    <article className="film-container">
      <div className="film-data pb-5">
        <h3 className="film-title text-xl italic text-center pb-1">
          {props.title}
        </h3>
        <div className="film-metadata text-sm text-center">
          Directed by {props.director} &bull; {props.releaseYear} &bull;{" "}
          {props.runtime}
          &nbsp; mins.
        </div>
      </div>
      <div className="synopsis-image pb-5 flex flex-col-reverse md:flex-row">
        <p className="synopsis mx-5 my-auto md:mr-10">{props.synopsis}</p>
        <img
          src={props.filmStill}
          alt={`Still from the film ${props.title} (${props.releaseYear})`}
          className="film-still max-w-[356px] max-h-[200px] self-center mb-5 md:mb-0 md:mr-5"
          height={200}
          width={356}
        />
      </div>
      <div className="trailer-imdb mx-10 space-x-5 flex flex-col items-center space-y-5 py-5 md:space-y-0 md:py-0 md:flex-row">
        <span className="imdb">
          <a
            href="https://www.imdb.com/title/tt0054215/"
            className="imdb-link"
            target="_blank"
            rel="noreferrer"
          >
            IMDb
          </a>
        </span>
        <div
          className="trailer-button flex flex-row cursor-pointer hover:text-black"
          data-videoid="DTJQfFQ40lI"
        >
          &#9658;&nbsp;Play trailer
        </div>
      </div>
      <hr width="65%" className="m-auto" />
    </article>
  );
}

export default FilmInfo;
