import { Link as NavLink } from "react-router-dom";

function NavElement({ destination, name, isDecorated }) {
  return isDecorated ? (
    <NavLink
      to={destination}
      className="hover:text-blue-800 hover:underline hover:underline-offset-4"
    >
      {name}
    </NavLink>
  ) : (
    <NavLink to={destination}>{name}</NavLink>
  );
}

export default NavElement;
