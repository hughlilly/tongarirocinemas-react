// Import images for carousel

import vertigoCarouselImage from "../assets/carousel/Vertigo.jpg";
import streetcarCarouselImage from "../assets/carousel/Streetcar.jpg";
import sunsetBlvdCarouselImage from "../assets/carousel/Sunset.jpg";
import rearWindowCarouselImage from "../assets/carousel/RearWindow.jpg";

function Carousel() {
  return (
    <section id="carousel">
      {/* Carousel, adapted from https://www.tailwindtoolbox.com/components/carousel */}
      <div className="carousel relative md:mx-auto md:px-6 md:py-12 max-w-screen-md overflow-hidden">
        <div className="carousel-inner relative">
          {/* Slide 1 */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden
            defaultChecked="checked"
          />
          <div className="carousel-item absolute opacity-0">
            <img src={vertigoCarouselImage} alt="Vertigo" />
          </div>
          <label
            htmlFor="carousel-4"
            className="hidden prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="hidden next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Slide 2 */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute opacity-0">
            <img src={sunsetBlvdCarouselImage} alt="Sunset Boulevard" />
          </div>
          <label
            htmlFor="carousel-1"
            className="hidden prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="hidden next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Slide 3 */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute opacity-0">
            <img src={streetcarCarouselImage} alt="A Streetcar Named Desire" />
          </div>
          <label
            htmlFor="carousel-2"
            className="hidden prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-4"
            className="hidden next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Slide 4 */}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-4"
            name="carousel"
            aria-hidden="true"
            hidden
          />
          <div className="carousel-item absolute opacity-0">
            <img src={rearWindowCarouselImage} alt="Rear Window" />
          </div>
          <label
            htmlFor="carousel-3"
            className="hidden prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="hidden next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-800 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Indicators for slides */}
          <ol className="carousel-indicators absolute">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-800"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-800"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-800"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-4"
                className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-800"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
