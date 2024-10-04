import Logo from "@/assets/images/Logo.svg";
import { Container } from "./Container";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
export default function Navbar() {
  return (
    <nav className="bg-[#1f4980] w-full sticky top-0 z-50">
      <Container className="flex items-center justify-between h-[100px]">
        <Link to="/">
          <div>
            <img src={Logo} alt="" className="h-16" />
          </div>
        </Link>
        <div>
          <ul className="flex items-center space-x-4 text-white font-secondary">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn("text-white", {
                    "cursor-pointer p-2 px-4 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] hover:bg-themeColor  bg-themeColor text-white rounded-lg select-none":
                      isActive,
                  })
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  cn("text-white", {
                    "cursor-pointer p-2 px-4 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] hover:bg-themeColor  bg-themeColor text-white rounded-lg select-none":
                      isActive,
                  })
                }
              >
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mapbox"
                className={({ isActive }) =>
                  cn("text-white", {
                    "cursor-pointer p-2 px-4 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] hover:bg-themeColor  bg-themeColor text-white rounded-lg select-none":
                      isActive,
                  })
                }
              >
                Mapbox
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  cn("text-white", {
                    "cursor-pointer p-2 px-4 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] hover:bg-themeColor  bg-themeColor text-white rounded-lg select-none":
                      isActive,
                  })
                }
              >
                Course
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/virtual-trip"
                className={({ isActive }) =>
                  cn("text-white", {
                    "cursor-pointer p-2 px-4 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] hover:bg-themeColor  bg-themeColor text-white rounded-lg select-none":
                      isActive,
                  })
                }
              >
                Virtual Trip
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
