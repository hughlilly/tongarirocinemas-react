import { toHoursAndMins } from "./toHoursAndMins";
import TrailerButton from "./TrailerButton";
import NowPlayingIcon from "../assets/logos_icons/playing.svg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { filmData } from "../Data/FilmData";

export default function FilmDetail() {
  const { title } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const foundFilm = filmData?.find((film) => {
      if (film?.title.toLowerCase().replaceAll(" ", "-") === title) {
        // The above line works, but I'd rather do this:
        // if (film?.id === id) {
        // I just can't work out how to pass `id` as a prop as well as the title to this nested route/Component…
        setFilm(film);
      }
    });
    return foundFilm;
  }, [filmData, title]);

  return (
    <main className="first-of-type:pt-20 last-of-type:pb-28 space-y-10 mx-auto max-w-4xl">
      <div id="header" className="pb-3 mx-auto text-center">
        <Link
          to="../now-playing/"
          className="hover:underline hover:underline-offset-4 text-xl pb-1"
        >
          Now Playing
        </Link>
      </div>
      <img
        src={NowPlayingIcon}
        alt="Now Playing"
        className="h-[96px] w-[96px] m-auto"
      />
      <article className="film-container">
        <div className="film-data xs:pb-5 md:pb-6 text-center">
          <h2 className="film-title text-2xl font-bold italic block pb-2">
            {film.title}
          </h2>
          <div className="film-metadata text-sm">
            Directed by {film.director}&nbsp;&bull;&nbsp;{film.releaseYear}
            &nbsp;&bull;&nbsp;{film.runtimeMins} min.
            {/* Conditionally render human-readable runtime if > 60 mins */}
            {/* Hidden on small screens, visible on md and up */}
            {film.runtimeMins > 60 && (
              <span className="hidden md:inline">
                &nbsp;({toHoursAndMins(film.runtimeMins)})
              </span>
            )}
          </div>
        </div>
        <div className="synopsis-image pb-5 flex flex-col pt-3">
          <img
            src={film.filmStill}
            alt={`Still from the film "${film.title}" (${film.releaseYear})`}
            className="film-still self-center mb-5 md:mb-0 md:mr-5 pb-5"
            height={400}
            width={712}
          />
          <p className="synopsis mx-8 sm:mx-24 md:mx-10 my-auto md:mr-10">
            {film.synopsis}
          </p>
        </div>
        <div className="trailer-imdb mx-10 md:space-x-4 space-y-5 pt-6 md:space-y-0 md:pt-0 flex flex-col items-center justify-center md:flex-row">
          <span className="imdb">
            <a
              href={`https://www.imdb.com/title/tt${film.IMDbID}`}
              className="imdb-link"
              target="_blank"
              rel="noreferrer"
            >
              IMDb
            </a>
          </span>
          <TrailerButton filmID={film.id} trailerID={film.trailerID} />
        </div>
      </article>
    </main>
  );
}
