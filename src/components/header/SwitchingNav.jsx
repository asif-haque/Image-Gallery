import { NavLink } from "react-router-dom";

function SwitchingNav() {
  return (
    <nav className="mb-4">
      <ul className="flex justify-center items-stretch p-0 m-auto switching-nav">
        <li className="li1">
          <NavLink to="/">Photos</NavLink>
        </li>
        <li className="li2">
          <NavLink to="/videos">Videos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SwitchingNav;
