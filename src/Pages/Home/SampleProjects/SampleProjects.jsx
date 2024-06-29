// import { useContext, useState } from "react";
// import { ProjectContext } from "../../../Context/ProjectData";

// const SampleProjects = () => {
//   const { projects } = useContext(ProjectContext);
//   console.log(projects);

//   const [modalData, setModalData] = useState(null);

//   const openModal = (project) => {
//     setModalData(project);
//     document.getElementById("my_modal_3").showModal();
//   };

//   return (
//     <div>
//       <div className="container mb-28 mx-auto">
//         <div className="text-center">
//           <h3 className="text-xl">Sample Projects</h3>
//           <h1 className="text-4xl font-bold">A few samples of my work</h1>
//         </div>

//         <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-8  mt-20">
//           {projects.slice(0, 4).map((project) => (
//             <div
//               key={project?.id}
//               className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
//               onClick={() => openModal(project)}
//             >
//               <div className="card  bg-base-100 shadow-xl image-full">
//                 <figure>
//                   <img src={project?.bgImg} alt="Project Background" />
//                 </figure>
//                 <div className="card-body">
//                   <h2 className="font-bold">{project?.category}</h2>
//                   <h1 className="lg:text-4xl xs:text-2xl font-bold">
//                     {project?.title}
//                   </h1>
//                   {project?.technologies && (
//                     <div>
//                       <h3>Technologies Used:</h3>
//                       <ul>
//                         {project.technologies.map((tech, index) => (
//                           <li key={index}>{tech}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* You can open the modal using document.getElementById('ID').showModal() method */}

//         <dialog id="my_modal_3" className="modal  ">
//           <div className="modal-box w-11/12 max-w-5xl">
//             <form method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
//                 ✕
//               </button>
//             </form>
//             <h3 className="font-bold text-lg text-center">
//               {modalData?.title}
//             </h3>
//             <a
//               href={modalData?.liveSiteLink}
//               target="_blank"
//               className="btn btn-sm"
//             >
//               Live Link
//             </a>
//             <a
//               href={modalData?.clientGitLink}
//               target="_blank"
//               className="btn btn-sm"
//             >
//               GitHub
//             </a>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
//               {/* Left side (image) */}
//               <div className="lg:col-span-1">
//                 <a
//                   href={modalData?.imgOne}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={modalData?.imgOne}
//                     alt="Banner"
//                     className="w-full"
//                   />
//                 </a>
//               </div>

//               {/* Right side (content) */}
//               <div className="lg:col-span-3">
//                 <div className="p-4">
//                   <p className="text-lg mb-4">{modalData?.DescriptionOne}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
//               {/* Left side (image) */}
//               <div className="lg:col-span-1">
//                 <a
//                   href={modalData?.imgTwo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={modalData?.imgTwo}
//                     alt="Banner"
//                     className="w-full"
//                   />
//                 </a>
//               </div>

//               {/* Right side (content) */}
//               <div className="lg:col-span-3">
//                 <div className="p-4">
//                   <p className="text-lg mb-4">{modalData?.DescriptionTwo}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
//               {/* Left side (image) */}
//               <div className="lg:col-span-1">
//                 <a
//                   href={modalData?.imgThree}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={modalData?.imgThree}
//                     alt="Banner"
//                     className="w-full"
//                   />
//                 </a>
//               </div>

//               {/* Right side (content) */}
//               <div className="lg:col-span-3">
//                 <div className="p-4">
//                   <p className="text-lg mb-4">{modalData?.DescriptionThree}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
//               {/* Left side (image) */}
//               <div className="lg:col-span-1">
//                 <a
//                   href={modalData?.imgFour}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={modalData?.imgFour}
//                     alt="Banner"
//                     className="w-full"
//                   />
//                 </a>
//               </div>

//               {/* Right side (content) */}
//               <div className="lg:col-span-3">
//                 <div className="p-4">
//                   <p className="text-lg mb-4">{modalData?.DescriptionFour}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
//               {/* Left side (image) */}
//               <div className="lg:col-span-1">
//                 <a
//                   href={modalData?.imgFive}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={modalData?.imgFive}
//                     alt="Banner"
//                     className="w-full"
//                   />
//                 </a>
//               </div>

//               {/* Right side (content) */}
//               <div className="lg:col-span-3">
//                 <div className="p-4">
//                   <p className="text-lg mb-4">{modalData?.DescriptionFive}</p>
//                 </div>
//               </div>
//             </div>

//             <h1 className="">Technology Use</h1>

//             {modalData?.technologyUse.map((item, index) => (
//               <h1 key={index} className="flex font-bold ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
//                 </svg>

//                 {item}
//               </h1>
//             ))}
//           </div>
//         </dialog>
//       </div>
//     </div>
//   );
// };

// export default SampleProjects;

// import { useState, useEffect } from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const SampleProjects = () => {
//   const [activeTab, setActiveTab] = useState("Front End");

//   const controls1 = useAnimation();
//   const controls2 = useAnimation();

//   const [ref1, inView1] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });
//   const [ref2, inView2] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView1) {
//       controls1.start("visible");
//     } else {
//       controls1.start("hidden");
//     }
//   }, [controls1, inView1]);

//   useEffect(() => {
//     if (inView2) {
//       controls2.start("visible");
//     } else {
//       controls2.start("hidden");
//     }
//   }, [controls2, inView2]);

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const tabVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <div className="bg-[#0f0b2a] text-white min-h-screen">
//       <div className="md:w-3/5 mx-auto py-10">
//         <h1 className="md:text-4xl xs:text-3xl font-bold text-[#7E6EE7] text-center">
//           Work Projects
//         </h1>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mt-5">
//           <button
//             className={`py-2 px-4 mx-2 rounded ${
//               activeTab === "Front End"
//                 ? "bg-[#7E6EE7] text-white"
//                 : "bg-[#19143780] text-[#7E6EE7]"
//             }`}
//             onClick={() => setActiveTab("Front End")}
//           >
//             Front End
//           </button>
//           <button
//             className={`py-2 px-4 mx-2 rounded ${
//               activeTab === "Back End"
//                 ? "bg-[#7E6EE7] text-white"
//                 : "bg-[#19143780] text-[#7E6EE7]"
//             }`}
//             onClick={() => setActiveTab("Back End")}
//           >
//             Back End
//           </button>
//         </div>

//         <AnimatePresence mode="wait">
//           {activeTab === "Front End" && (
//             <motion.div
//               key="front-end"
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={tabVariants}
//               className="mt-5"
//             >
//               <motion.div
//                 ref={ref1}
//                 initial="hidden"
//                 animate={controls1}
//                 variants={variants}
//                 className="hover:bg-[#19143780] rounded p-5 mb-5"
//               >
//                 <div className="grid grid-cols-12 gap-10">
//                   <div className="col-span-7">
//                     <img
//                       className="rounded"
//                       src="https://jribh.com/spacetime.6198bdf3.png"
//                       alt="Visually Understanding Space & Time"
//                     />
//                   </div>

//                   <div className="col-span-5">
//                     <h1>Visually Understanding Space & Time</h1>
//                     <p>
//                       An online guide with interactive visualisations to
//                       understand all there is behind the Special and General
//                       Theories of Relativity.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}

//           {activeTab === "Back End" && (
//             <motion.div
//               key="back-end"
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={tabVariants}
//               className="mt-5"
//             >
//               <motion.div
//                 ref={ref2}
//                 initial="hidden"
//                 animate={controls2}
//                 variants={variants}
//                 className="hover:bg-[#19143780] rounded p-5 mb-5"
//               >
//                 <div className="grid grid-cols-12 gap-10">
//                   <div className="col-span-7">
//                     <img
//                       className="rounded"
//                       src="https://jribh.com/spacetime.6198bdf3.png"
//                       alt="Visually Understanding Space & Time"
//                     />
//                   </div>

//                   <div className="col-span-5">
//                     <h1>Visually Understanding Space & Time</h1>
//                     <p>
//                       An online guide with interactive visualisations to
//                       understand all there is behind the Special and General
//                       Theories of Relativity.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SampleProjects;

import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ReactPaginate from "react-paginate";
import "./SampleProjects.css";
import { GoArrowUpRight } from "react-icons/go";

import { bb, cc } from "../../../assets/image/image";

const tabData = {
  frontend: [
    {
      title: "Frontend Development",
      name: "Bazaar Buzz",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: bb,
    },
    {
      title: "Responsive Design",
      name: "Bazaar Buzz",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
    },
    {
      title: "Frontend Development",
      name: "Example Project 1",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: bb,
    },
    {
      title: "Responsive Design",
      name: "Example Project 2",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
    },
    {
      title: "Frontend Development",
      name: "Example Project 3",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: bb,
    },
    {
      title: "Responsive Design",
      name: "Example Project 4",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
    },
  ],
  fullstack: [
    {
      title: "FullStack Development",
      name: "Bazaar Buzz",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: bb,
    },
    {
      title: "FullStack Development",
      name: "Health Pro",
      content: "Integrating third-party APIs into applications.",
      imageUrl: cc,
    },
    {
      title: "FullStack Development",
      name: "Example Project 5",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: bb,
    },
    {
      title: "FullStack Development",
      name: "Example Project 6",
      content: "Integrating third-party APIs into applications.",
      imageUrl: cc,
    },
  ],
};

const ITEMS_PER_PAGE = 3; // প্রতিটি পেজে কতগুলো আইটেম দেখানো হবে

const SampleProjects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [modalContent, setModalContent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0); // ট্যাব পরিবর্তন করলে প্রথম পেজে ফিরিয়ে নেওয়া
  };

  const handleCardClick = (project) => {
    setModalContent(project);
    document.getElementById("my_modal_3").showModal();
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentData = tabData[activeTab].slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-[#0f0b2a] text-white min-h-screen" id="projects">
      <div className="md:w-3/5 xs:w-full mx-auto p-2 py-16">
        <h1 className="md:text-3xl xs:text-3xl font-bold text-[#7E6EE7] ">
          Work Projects
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
          {Object.keys(tabData).map((key) => (
            <button
              key={key}
              className={`tab-button py-2 px-4 rounded ${
                activeTab === key
                  ? "bg-[#7E6EE7] text-white"
                  : "bg-[#19143780] text-[#7E6EE7]"
              }`}
              onClick={() => handleTabChange(key)}
            >
              {tabData[key][0].title.split(" ")[0]}
            </button>
          ))}
        </div>

        <div className="mt-1">
          <TabPanel value={activeTab} index={activeTab}>
            {currentData.map((project, idx) => (
              <CardWithScrollAnimation
                key={idx}
                title={project.title}
                name={project.name}
                content={project.content}
                imageUrl={project.imageUrl}
                onClick={() => handleCardClick(project)}
              />
            ))}
          </TabPanel>

          <div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(tabData[activeTab].length / ITEMS_PER_PAGE)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#191437] md:w-3/5 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            {modalContent && (
              <>
                <h3 className="text-2xl">{modalContent.name}</h3>
                <div className="flex gap-2">
                  <button className="text-[#b6abff] flex items-center gap-1">
                    Go to website <GoArrowUpRight />
                  </button>
                  <div className="border border-[#b6abff]"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div className="tab-panel p-4">{children}</div>}
    </div>
  );
};

const CardWithScrollAnimation = ({
  title,
  content,
  imageUrl,
  name,
  onClick,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation every time card enters viewport
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="mt-4 cursor-pointer" onClick={onClick}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="card hover:bg-[#191437] rounded-lg p-5 mb-5"
      >
        <div className="grid grid-cols-12 md:gap-10">
          <div className="md:col-span-7 xs:col-span-12">
            <img className="rounded-lg w-full" src={imageUrl} alt={title} />
          </div>
          <div className="md:col-span-5 xs:col-span-12 flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="mt-2 text-gray-300">{content}</p>
            <button className="text-sm flex items-center gap-2">
              Details <GoArrowUpRight />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SampleProjects;
