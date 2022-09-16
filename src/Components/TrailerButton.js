import { useState } from "react";
import TrailerModal from "./TrailerModal";

function TrailerButton({ trailerID, filmID }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        className="trailer-button flex flex-row cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        &#9658;&nbsp;Play trailer
      </button>

      {/* Dialog */}
      <TrailerModal
        trailerID={trailerID}
        modalOpen={modalOpen}
        closeModal={() => {
          // Get iframe element so we can pause it on close
          const embeddedTrailer = document.getElementById("embedded-trailer");
          // When close action is taken, also pause the video so that it doesn't keep playing in the background; see
          // http://michaelrispolidevelopment.com/tips%20and%20tricks/2017/08/07/pause-youtube-video-on-an-event.html
          embeddedTrailer.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
          setModalOpen(false);
        }}
        key={"trailerForFilm" + filmID}
      />
    </>
  );
}

export default TrailerButton;
