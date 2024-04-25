import { MdContactPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" ">
      <div className="container  fixed top-0 left-0 right-0 bg-transparent z-50 mx-auto  flex justify-between items-center h-24">
        <div>
          <div className="avatar">
            <div className="lg:w-16 xs:w-12 mask mask-squircle">
              <img src="/src/assets/1678859971159 (1).png" />
            </div>
          </div>
        </div>
        <div>
          <ul className="menu bg-base-200 lg:menu-horizontal rounded-box hidden lg:flex">
            <li>
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="projects">
                <CgWebsite size={20} />
                Projects
              </Link>
            </li>
            <li>
              <Link to="about">
                <MdContactPhone size={20} />
                About
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
