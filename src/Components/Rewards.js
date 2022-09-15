import MemberIcon from "../assets/logos_icons/member.svg";

function Rewards() {
  return (
    <main>
      <section
        id="rewards"
        className="m-auto px-12 md:px-14 max-w-4xl flex flex-col justify-between space-y-10 first-of-type:pt-12 last-of-type:pb-24 last-of-type:md:pb-12"
      >
        <h1 className="text-xl text-center pb-14">Rewards</h1>
        <img
          src={MemberIcon}
          alt="Member icon"
          className="h-[96px] w-[96px] align-middle m-auto"
        />
        <p className="p-8 mt-10">
          Join our rewards programme and start saving today. Benefits include:
        </p>
        <ul id="benefit-list" className="list-decimal mx-20">
          <li className="benefit">
            10% off your first ticket purchase over $50
          </li>
          <li className="benefit">Free entry to the museum on Saturdays</li>
          <li className="benefit">One free coffee at the café</li>
          <li className="benefit">
            A free ticket to any screening on your birthday
          </li>
        </ul>
        <p />
        <p className="p-8">
          Sign up online by filling in your email address below and we&apos;ll
          be in touch.
        </p>
      </section>
    </main>
  );
}

export default Rewards;
