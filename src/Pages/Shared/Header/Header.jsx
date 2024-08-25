// import { MdContactPhone } from "react-icons/md";
// import { CgWebsite } from "react-icons/cg";

// import { IoLogoMarkdown } from "react-icons/io";
// import { Link } from "react-scroll";
// import { SiAboutdotme } from "react-icons/si";

// const Header = () => {
//   return (
//     <div className=" ">
//       <div className="md:container md:mx-auto p-1  fixed top-0 left-0 right-0 bg-transparent z-50 mx-auto  flex justify-between items-center h-24">
//         <div>
//           <Link to="home" smooth={true} duration={500}>
//             <div className="lg:w-14 xs:w-12 cursor-pointer">
//               {/* <img src="/src/assets/1678859971159 (1).png" /> */}
//               <IoLogoMarkdown size={60} color="#7E6EE7" />
//             </div>
//           </Link>
//         </div>
//         <div>
//           <ul className="menu bg-[#3F3D56] text-[#dddd] font-bold lg:menu-horizontal rounded-box hidden lg:flex">
//             <li>
//               <Link to="home" smooth={true} duration={500}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                   />
//                 </svg>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="about" smooth={true} duration={500}>
//                 <SiAboutdotme size={20} />
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="projects" smooth={true} duration={500}>
//                 <CgWebsite size={20} />
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link to="contact" smooth={true} duration={500}>
//                 <MdContactPhone size={20} />
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <a>Home</a>
//               </li>

//               <li>
//                 <a>Projects</a>
//               </li>
//               <li>
//                 <a>About</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { MdContactPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { IoLogoMarkdown } from "react-icons/io";
import { Link } from "react-scroll";
import { SiAboutdotme } from "react-icons/si";

const Header = () => {
  return (
    <div>
      <div className="md:container md:mx-auto  fixed top-0 left-0 right-0  z-50 flex justify-between p-2 ">
        <div style={{ marginTop: "-7px" }}>
          <Link to="home" smooth={true} duration={500}>
            <div className="lg:w-14 xs:w-12 cursor-pointer">
              <IoLogoMarkdown size={60} color="#7E6EE7" />
            </div>
          </Link>
        </div>
        <div>
          <ul className="menu bg-[#3F3D56] text-[#dddd] font-bold lg:menu-horizontal rounded-box hidden lg:flex">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                activeClass="text-[#7E6EE7]"
                className="cursor-pointer text-white hover:text-[#7E6EE7]"
              >
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
              <Link
                to="about"
                smooth={true}
                duration={500}
                activeClass="text-[#7E6EE7]"
                className="cursor-pointer text-white hover:text-[#7E6EE7]"
              >
                <SiAboutdotme size={20} />
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                activeClass="text-[#7E6EE7]"
                className="cursor-pointer text-white hover:text-[#7E6EE7]"
              >
                <CgWebsite size={20} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                activeClass="text-[#7E6EE7]"
                className="cursor-pointer text-white hover:text-[#7E6EE7]"
              >
                <MdContactPhone size={20} />
                Contact
              </Link>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#7E6EE7]"
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
              className="menu dropdown-content z-[1] p-2 shadow bg-[#3F3D56] rounded-box w-52"
            >
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  activeClass="text-[#7E6EE7]"
                  className="cursor-pointer text-[#dddd]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  activeClass="text-[#7E6EE7]"
                  className="cursor-pointer text-[#dddd]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  activeClass="text-[#7E6EE7]"
                  className="cursor-pointer text-[#dddd]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  activeClass="text-[#7E6EE7]"
                  className="cursor-pointer text-[#dddd]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
