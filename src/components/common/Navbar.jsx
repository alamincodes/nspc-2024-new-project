import Logo from "@/assets/images/Logo.svg";
import { Container } from "./Container";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="bg-[#1f4980] w-full sticky top-0">
      <Container className="flex items-center justify-between h-[100px]">
        <div>
          <img src={Logo} alt="" className="h-16" />
        </div>
        <div>
          <ul className="flex items-center space-x-4 text-white">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/quiz">Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/">Mapbox</NavLink>
            </li>
            <li>
              <NavLink to="/">Course</NavLink>
            </li>
            <li>
              <NavLink to="/virtual-trip">Virtual Trip</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
