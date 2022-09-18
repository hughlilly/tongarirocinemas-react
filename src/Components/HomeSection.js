// Fragment needed because of conditionally rendered horizontal rule
import { Link as NavLink } from "react-router-dom";

function HomeSection(props) {
  return (
    <section id={props.id}>
      <h1 className="text-xl md:pl-4">
        <NavLink to={props.linkTo} className="hover:underline">
          {props.headingText}
        </NavLink>
      </h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="mx-auto md:m-0 px-4 pt-9 md:pt-5 w-prose">
          {props.text}
        </div>
        <img
          src={props.icon}
          alt={props.altText}
          className="flex flex-row align-middle h-16 m-auto md:px-9 md:mr-0 pt-4 md:pt-0"
        />
      </div>
    </section>
  );
}

export default HomeSection;
