import Carousel from "./Carousel";
import { Fragment } from "react";

// Import HomeSection component, and data to send down
import HomeSection from "./HomeSection";
import { sections } from "../Data/AppData";

function Home() {
  return (
    <Fragment>
      {/* Carousel */}
      <Carousel />
      {/* Home page sections */}
      {/* Map over the `sections` array, creating a `HomeSection` component for each object */}
      <main className="m-auto md:px-14 max-w-4xl text-center md:text-left flex flex-col space-y-10 md:space-y-20 pt-16 first-of-type:md:pt-24 pb-28 last-of-type:md:pb-36">
        {sections.map((section, index) => {
          // Render a horizontal rule between HomeSection components (but not after the last one)
          // Give every major element, including invisible Fragments, a unique key
          if (index < sections.length - 1) {
            return (
              <Fragment key={"Fragment" + section.id}>
                <HomeSection {...section} key={"HomeSection" + section.id} />
                <hr width="65%" className="mx-auto my-10" />
              </Fragment>
            );
          } else {
            return (
              <HomeSection {...section} key={"HomeSection" + section.id} />
            );
          }
        })}
      </main>
    </Fragment>
  );
}

export default Home;
