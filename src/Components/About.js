import AboutIcon from "../assets/logos_icons/about.svg";

function About() {
  return (
    <main>
      <section
        id="about-us"
        className="m-auto px-12 md:px-14 max-w-4xl flex flex-col justify-between space-y-10 first-of-type:pt-12 last-of-type:pb-24 last-of-type:md:pb-12"
      >
        <h1 className="text-xl text-center pb-6">About Tongariro Cinemas</h1>
        <img
          src={AboutIcon}
          alt=""
          className="h-[96px] w-[96px] align-middle m-auto"
        />
        <p className="pt-8">
          Tongariro Cinemas has a long and illustrious history in Aotearoa New
          Zealand. It was one of the first cinemas to screen{" "}
          <span style={{ fontStyle: "italic" }}>Star Wars</span> in 1977, and
          has had a café and historical museum attached since the early 1990s.
        </p>
        <p>
          We have recently begun a programme of improvements which includes this
          new website. Soon you&apos;ll be able to book seats online and pay
          with your credit card, avoiding double-bookings!
        </p>
      </section>
    </main>
  );
}

export default About;
