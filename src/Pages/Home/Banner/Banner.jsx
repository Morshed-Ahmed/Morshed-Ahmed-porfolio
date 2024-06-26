// import "./Banner.css";

// const Banner = () => {
//   return (
//     <div className=" bg-gradient-to-t from-white via-emerald-200 to-blue-300 lg:pb-0 xs:pb-16 xs:pt-10 lg:pt-0 flex items-center  lg:h-[100vh]">
//       <div className="container mx-auto ">
//         <div className="grid grid-cols-12 gap-7 mt-16">
//           <div className="lg:col-span-6 xs:col-span-12">
//             <div className="card  bg-base-100 shadow-xl">
//               <div className="card-body">
//                 <div className="avatar flex w-full justify-between">
//                   <div className="w-40">
//                     {/* <img
//                       src="https://framerusercontent.com/images/XCFWYUzA9x0xdApopQ9DT3Pucb8.png"
//                       alt="avatar img"
//                     /> */}

//                     <img
//                       src="https://i.ibb.co/mCMSsVC/undraw-feeling-proud-qne1.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//                 <h2 className="card-title lg:text-4xl xs:text-3xl font-bold">
//                   Hey, Im Morshed Ahmed
//                 </h2>
//                 <div className="flex justify-between lg:mt-2 xs:mt-0">
//                   <div>
//                     <h2 className="text-xl">
//                       A Junior Full Stack Developer at Revolution
//                     </h2>
//                   </div>
//                   <div>
//                     <img
//                       src="https://i.ibb.co/mytcbxt/751-share-gradient.gif"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-3  xs:col-span-12">
//             <div className="card  bg-base-100 shadow-xl">
//               <div className="card-body">
//                 <div className=" w-24">
//                   <img
//                     //   src="https://i.ibb.co/P9tM27W/56-document-flat.png"
//                     src="https://i.ibb.co/7njXRT7/56-document-flat-1.png"
//                     alt="avatar img"
//                   />
//                 </div>
//                 <h2 className="text-base">LEARN MORE ABOUT ME</h2>
//                 <div className="flex justify-between lg:mt-0 xs:mt-0">
//                   <div>
//                     <h2 className="card-title lg:text-3xl xs:text-3xl font-bold">
//                       See my resume
//                     </h2>
//                   </div>
//                   <div>
//                     <a
//                       href="https://drive.google.com/file/d/1RMb4wFVFpH7WOq8wWQLHJKkozHvdFeMd/view"
//                       target="_blank"
//                     >
//                       <img
//                         src="https://i.ibb.co/mytcbxt/751-share-gradient.gif"
//                         alt=""
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-3 xs:col-span-12">
//             <div className="card  bg-base-100 shadow-xl">
//               <div className="card-body">
//                 <div className="">
//                   <div className="flex justify-center ">
//                     <img
//                       className="w-52"
//                       src="https://i.ibb.co/WVrBzDZ/alexander-shatov-9-Zjd7-PE-FRM-unsplash-removebg-preview.png"
//                       alt="avatar img"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <a
//                     href="https://www.linkedin.com/in/md-morshed-ahmed/"
//                     target="_blank"
//                   >
//                     <img
//                       src="https://i.ibb.co/mytcbxt/751-share-gradient.gif"
//                       alt=""
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { CiDesktopMouse2, CiLocationArrow1 } from "react-icons/ci";
import "./Banner.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import kk from "../../../assets/undraw_programming_re_kg9v.svg";

const Banner = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false });

  return (
    <div className="Container" id="home">
      <div className="md:container p-2 mx-auto md:h-dvh xs:py-24 grid md:grid-cols-3 gap-4 content-center ">
        <motion.div
          className="flex items-center"
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="title md:text-4xl xs:text-3xl font-bold text-[#7E6EE7]">
                Hi
                <br />
                <span>I&apos;m Morshed Admed</span>
              </h1>
            </div>

            <h1 className="text-xl text-[#605D69] font-bold">
              Junior Full Stack Developer: Proficient in MERN and Django.
            </h1>
            <div>
              <button className="flex items-center gap-3 font-medium border border-[#453C80] hover:bg-[#453C80] px-3 text-[#726b9d] hover:text-[white] py-2">
                Contact Me
                <CiLocationArrow1 />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="p-8"
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={kk} alt="" />
        </motion.div>
        <motion.div
          className="flex items-center"
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-[#605D69] ">
              As a web developer, I thrive on building dynamic and engaging
              interfaces that leave a lasting impact on users.
            </h1>
            <div className="flex items-center gap-2 text-[#605D69] font-bold">
              <CiDesktopMouse2 />
              Scroll for more
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
