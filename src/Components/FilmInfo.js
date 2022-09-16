import TrailerButton from "./TrailerButton";

// Calculate runtime in human-understandable "hours and minutes" phrasing
function toHoursAndMins(runtimeMins) {
  // Calculate number of whole hours in runtime
  const wholeHours = Math.floor(runtimeMins / 60);

  // Calculate modulus of minutes (number of minutes left over after full hours calculated)
  const remainderMins = runtimeMins % 60;

  // Return whole hours, with "hour" singular if only one hour, "hours" plural if more than one, plus minutes
  return (
    wholeHours +
    (wholeHours === 1 ? " hour " : " hours ") +
    remainderMins +
    " min."
  );
}

function FilmInfo(props) {
  return (
    <article className="film-container">
      <div className="film-data xs:pb-5 md:pb-6">
        <h3 className="film-title text-2xl font-bold italic text-center pb-2">
          {props.title}
        </h3>
        <div className="film-metadata text-sm text-center">
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
        <TrailerButton
          key={"trailerButtonForFilm" + props.id}
          filmID={props.id}
          trailerID={props.trailerID}
        />
      </div>
      <hr width="65%" className="mx-auto my-10" />
    </article>
  );
}

export default FilmInfo;
