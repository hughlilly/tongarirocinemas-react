import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function TrailerModal({ trailerID, modalOpen, closeModal }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (modalOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      dialogRef.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

  return (
    modalOpen &&
    createPortal(
      <dialog
        id="modal"
        className="modal border border-[#333] aspect-video w-[95vw] max-w-[768px] lg:max-h-[75vh] p-0 bg-transparent"
        ref={dialogRef}
      >
        <button
          id="close-btn"
          className="text-white text-xl font-bold pb-2 pr-1 cursor-pointer bg-transparent absolute right-0"
          onClick={closeModal}
        >
          ×
        </button>
        <iframe
          id="embedded-trailer"
          width="100%"
          height="100%"
          // Setting `enablejsapi` to 1 (true) allows us to pause the video on close; see
          // https://developers.google.com/youtube/player_parameters
          src={`https://www.youtube.com/embed/${trailerID}?&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </dialog>,
      document.getElementById("modal-root")
    )
  );
}

export default TrailerModal;
