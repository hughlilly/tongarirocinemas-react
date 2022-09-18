import { Fragment } from "react";
import FilmInfo from "./FilmInfo";

import { filmData } from "../Data/FilmData";
import NowPlayingIcon from "../assets/logos_icons/playing.svg";

function NowPlaying() {
  return (
    <main className="first-of-type:pt-20 last-of-type:pb-28 space-y-10 mx-auto max-w-4xl">
      <h1 className="text-xl text-center pb-1">Now Playing</h1>
      <img
        src={NowPlayingIcon}
        alt="Now Playing"
        className="h-[96px] w-[96px] m-auto"
      />
      {/* Map over the `filmData` array, creating a `FilmInfo` component for each object */}
      {filmData.map((film, index) => {
        // Render a horizontal rule between FilmInfo components (but not after the last one)
        // Give every major element, including invisible Fragments, a unique key
        return index != filmData.length - 1 ? (
          <Fragment key={"Fragment" + film.id}>
            <FilmInfo {...film} key={"FilmInfoSection" + film.id} />
            <hr width="65%" className="mx-auto my-10" />
          </Fragment>
        ) : (
          // Else, for the final object in the array, return just the FilmInfo component
          <FilmInfo {...film} key={"film" + film.id} />
        );
      })}
    </main>
  );
}

export default NowPlaying;
