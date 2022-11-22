import { toHoursAndMins } from "./toHoursAndMins";
import TrailerButton from "./TrailerButton";
import { Link } from "react-router-dom";

function FilmInfo(props) {
  const slug = props.title.toLowerCase().replaceAll(" ", "-");
  return (
    <article className="film-container">
      <div className="film-data xs:pb-5 md:pb-6 text-center">
        <div id="film-title" className="pb-3 mx-auto">
          <Link
            to={slug}
            className="film-title hover:underline hover:decoration-4 hover:underline-offset-2 text-2xl font-bold italic"
          >
            {props.title}
          </Link>
        </div>
        <div className="film-metadata text-sm">
          Directed by {props.director}&nbsp;&bull;&nbsp;{props.releaseYear}
          &nbsp;&bull;&nbsp;{props.runtimeMins} min.
          {/* Conditionally render human-readable runtime if > 60 mins */}
          {/* Hidden on small screens, visible on md and up */}
          {props.runtimeMins > 60 && (
            <span className="hidden md:inline">
              &nbsp;({toHoursAndMins(props.runtimeMins)})
            </span>
          )}
        </div>
      </div>
      <div className="synopsis-image pb-5 flex flex-col-reverse md:flex-row pt-6">
        <p className="synopsis mx-8 sm:mx-24 md:mx-10 my-auto md:mr-10">
          {props.synopsis}
          <br />
          <br />
          <Link
            to={slug}
            className="hover:underline hover:decoration-4 hover:underline-offset-2 font-bold italic pb-2"
          >
            Read more…
          </Link>
        </p>
        <img
          src={props.filmStill}
          alt={`Still from the film "${props.title}" (${props.releaseYear})`}
          className="film-still max-w-[356px] max-h-[200px] self-center mb-5 md:mb-0 md:mr-5"
          height={200}
          width={356}
        />
      </div>
      <div className="trailer-imdb mx-10 md:space-x-4 space-y-5 pt-6 md:space-y-0 md:pt-0 flex flex-col items-center md:flex-row">
        <span className="imdb">
          <a
            href={`https://www.imdb.com/title/tt${props.IMDbID}`}
            className="imdb-link"
            target="_blank"
            rel="noreferrer"
          >
            IMDb
          </a>
        </span>
        <TrailerButton filmID={props.id} trailerID={props.trailerID} />
      </div>
    </article>
  );
}

export default FilmInfo;
