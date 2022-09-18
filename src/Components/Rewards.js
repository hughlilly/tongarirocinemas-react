import MemberIcon from "../assets/logos_icons/member.svg";
import { benefitsList } from "../Data/Data";

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
          {/* Map over the list of benefits and produce an <li> element for each */}
          {benefitsList.map((benefit) => (
            <li className="benefit" key={benefit.id}>
              {benefit.text}
            </li>
          ))}
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
