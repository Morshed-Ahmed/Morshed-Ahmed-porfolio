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
import { FaArrowRight } from "react-icons/fa";

import {
  BazaarBuzzBanner,
  BazaarBuzzHome,
  BazaarBuzzProducts,
  BazaarBuzzProductDts,
  BazaarBuzzPymentInfo,
  BazaarBuzzPyment,
  cc,
  HealthProBanner,
  HealthProHome,
  HealthProDoctorDts,
  HealthProAppointment,
  HealthProProfile,
  ParkSpotterMainBanner,
  ParkSpotterMainHome,
  ParkSpotterMainRegister,
  ParkSpotterMainDashboard,
  ParkSpotterMainTicketCreate,
  ParkSpotterMainAvailableSlots,
  ParkSpotterMainTicketPayment,
  ParkSpotterMainEmployeeList,
  ParkSpotterMainEmployeeSelary,
  ParkSpotterMainZones,
  ParkSpotterMainLocation,
  ParkSpotterPwa1,
  ParkSpotterPwa2,
  ParkSpotterPwa3,
  ParkSpotterPwa4,
  ParkSpotterPwa5,
  ParkSpotterPwa6,
  Education1,
  Education2,
  Education3,
  Education4,
  Education5,
  DoctorTeam1,
  DoctorTeam2,
  CartCalculate1,
  CartCalculate2,
  SearchBooks,
  MacbookPro1,
  MacbookPro2,
} from "../../../assets/image/image";

const tabData = {
  frontend: [
    {
      title: "Frontend Development",
      name: "Online Education",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: Education1,
      images: [Education2, Education3, Education4, Education5],
      links: [
        '<a  target="_blank" href="https://silly-borg-d99dd4.netlify.app/">Go to website</a>',
        '<a target="_blank" href="https://github.com/Morshed-Ahmed/Edication-online">Github link</a>',
      ],
      description: [],
      technologies: ["React", "React router", "React bootstrap", "Recharts"],
    },
    {
      title: "Frontend Development",
      name: "Doctors Team",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: DoctorTeam2,
      images: [DoctorTeam1],
      links: [
        '<a  target="_blank" href="https://admiring-galileo-b2235a.netlify.app/ ">Go to website</a>',
      ],
      description: [],
      technologies: ["React", "React bootstrap"],
    },
    {
      title: "Frontend Development",
      name: "Cart Calculate",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: CartCalculate2,
      images: [CartCalculate1],
      links: [
        '<a  target="_blank" href="https://sad-carson-bbaecb.netlify.app/">Go to website</a>',
      ],
      description: [],
      technologies: ["React", "React bootstrap"],
    },
    {
      title: "Frontend Development",
      name: "Search Books",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: SearchBooks,
      images: [SearchBooks],
      links: [
        '<a  target="_blank" href="https://competent-varahamihira-2509f9.netlify.app/">Go to website</a>',
      ],
      description: [],
      technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    },
    {
      title: "Frontend Development",
      name: "Mackbook Pro",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: MacbookPro1,
      images: [MacbookPro2],
      links: [
        '<a  target="_blank" href="https://wonderful-meitner-fad835.netlify.app/">Go to website</a>',
        '<a  target="_blank" href="https://github.com/Morshed-Ahmed/mackbook-pro">Github link</a>',
      ],
      description: [],
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Responsive Design",
      name: "Bazaar Buzz",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Frontend Development",
      name: "Example Project 1",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: BazaarBuzzBanner,
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Responsive Design",
      name: "Example Project 2",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Frontend Development",
      name: "Example Project 3",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: BazaarBuzzBanner,
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Responsive Design",
      name: "Example Project 4",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
      images: [BazaarBuzzBanner, cc],
    },
  ],
  fullstack: [
    {
      title: "FullStack Development",
      name: "Bazaar Buzz",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: BazaarBuzzBanner,
      images: [
        BazaarBuzzHome,
        BazaarBuzzProducts,
        BazaarBuzzProductDts,
        BazaarBuzzPymentInfo,
        BazaarBuzzPyment,
      ],
      links: [
        '<a  target="_blank" href="https://bazaarbuzz.netlify.app/">Go to website</a>',
        '<a target="_blank" href="https://github.com/Morshed-Ahmed/BazaarBuzz-client">Frontend github link</a>',
        '<a target="_blank" href="https://github.com/Morshed-Ahmed/BazaarBuzz-server">Backend github link</a>',
      ],
      description: [
        "User Authentication: Secure sign-up, sign-in, and log-out functionality using Django's authentication system, integrated seamlessly with React.",
        "Cart Management: Dynamic cart management allowing users to add, update, and remove items, with real-time updates and persistent cart state.",
        "Checkout Process: Streamlined checkout process guiding users through order confirmation, payment, and review, ensuring a smooth purchasing experience.",
        "Stripe Payment Integration: Secure payment gateway integration with Stripe, enabling credit card transactions and handling payment errors gracefully.",
        "Order History: Comprehensive order history page where users can view past purchases, track order statuses, and reorder products easily.",
        "Profile Management: User profile page with the ability to update personal details, manage shipping addresses, and store payment information for faster checkouts.",
        "Responsive Design: Fully responsive UI/UX ensuring optimal user experience across all devices, from desktops to mobile phones.",
        "Backend API: Robust Django backend with RESTful APIs to handle user authentication, cart operations, order management, and payment processing efficiently.",
      ],
      technologies: [
        "Django Rest Framework",
        "React",
        "Bootstrap",
        "SqLite",
        "Stripe payment",
      ],
    },
    {
      title: "FullStack Development",
      name: "Bazaar Buzz",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: ParkSpotterMainBanner,
      images: [
        ParkSpotterMainHome,
        ParkSpotterMainRegister,
        ParkSpotterMainDashboard,
        ParkSpotterMainTicketCreate,
        ParkSpotterMainAvailableSlots,
        ParkSpotterMainTicketPayment,
        ParkSpotterMainEmployeeList,
        ParkSpotterMainEmployeeSelary,
        ParkSpotterMainZones,
        ParkSpotterMainLocation,
        ParkSpotterPwa1,
        ParkSpotterPwa2,
        ParkSpotterPwa3,
        ParkSpotterPwa4,
        ParkSpotterPwa5,
        ParkSpotterPwa6,
      ],
      links: [
        '<a  target="_blank" href="https://development-parkspotter.netlify.app/">Go to website</a>',
        '<a  target="_blank" href="https://development-parkspotter-pwa.netlify.app/">Customer PWA App Live Site</a>',
        '<a  target="_blank" href="https://parkspotter-dashboard-development.netlify.app/">Admin Dashboard Live Site</a>',
        '<a target="_blank" href="https://lucid.app/lucidchart/28efe63c-9423-4e9f-9fc6-527ec0624d64/edit?invitationId=inv_db5affd9-5ad5-439e-bdb4-304cb4df5dd6&page=HWEp-vi-RSFO#">E-R Diagram Link</a>',
      ],
      description: [
        "Implemented seamless communication and data synchronization across the User App, Park Owner Dashboard, and Admin Dashboard, ensuring consistent and up-to-date information flow across all user roles and interfaces.",
        "JWT-Authenticated Sign-Up and Login: Implemented JWT-based sign-up and login processes in the User App, ensuring secure and fast access for users.",
        "Mapbox Integration with Clustering: Integrated Mapbox in the User App, utilizing clustering and lazy loading to reduce map load times by 25%, enhancing the user experience when viewing locations.",
        "Slot Booking with Redux Thunk: Developed a slot booking feature in the User App using Redux Thunk, optimizing state management to ensure smooth and responsive bookings.",
        "User Profile Management: Built user profile management in the User App with local storage caching, reducing load times by 20%, allowing users to quickly access and manage their profiles.",
        "Responsive UI for User App: Designed the User App with a responsive interface, ensuring smooth navigation across devices like smartphones, tablets, and desktops.",
        "Real-Time Notifications for Users: Implemented real-time notifications in the User App, keeping users informed instantly about their booking confirmations and updates.",
        "Overview Section with Async Fetching: In the Park Owner Dashboard, an Overview section was built using asynchronous data fetching and memoization, improving data retrieval speed by 40% for quick access to key metrics.",
        "Employee Management System: Designed the employee management system in the Park Owner Dashboard with batch payroll processing and performance tracking, boosting speed by 35% and streamlining staff management.",
        "Zones Management with Virtualized Lists: Integrated zones management in the Park Owner Dashboard using virtualized lists, enabling efficient handling and rendering of large data sets for park zones.",
        "Location Update with Debounce: Added location update functionality in the Park Owner Dashboard with debounce, reducing server load by 15% and ensuring smoother updates without overloading the system.",
        "Real-Time Slot Management: Enhanced slot management in the Park Owner Dashboard to provide real-time updates, allowing park owners to manage slot availability with minimal delay.",
        "Revenue Tracking in Park Owner Dashboard: Integrated a revenue tracking system within the Park Owner Dashboard, enabling park owners to monitor their earnings in real-time and gain financial insights.",
        "Optimized Overview Dashboards: In the Admin Dashboard, optimized Overview dashboards were implemented to cut data retrieval and rendering times by 50%, allowing admins to access crucial metrics quickly.",
        "Analytics Menu with Faster Graph Rendering: Developed and optimized the Analytics menu in the Admin Dashboard, reducing graph rendering times by 30%, facilitating faster data analysis.",
        "Park Owner Management with Pagination: Implemented Park Owner management in the Admin Dashboard using pagination and filtering, enabling efficient handling of large data sets for better management.",
        "Subscriptions Menu with Enhanced State Management: Built and optimized the Subscriptions menu in the Admin Dashboard, reducing load times by 20% through effective state management, streamlining subscription handling.",
        "Bookings Menu with Infinite Scrolling: Designed the Bookings menu in the Admin Dashboard with infinite scrolling, improving performance and user experience by allowing seamless navigation through booking records.",
        "Interactive Map Integration: Integrated an interactive map using Mapbox GL JS across both the User App and Admin Dashboard, with optimized vector tiles for smooth interactions, enhancing the user experience when visualizing data on the map.",
      ],
      technologies: [
        "Django Rest Framework",
        "React",
        "React style components",
        "React Saga",
        "Mapbox",
        "Stripe payment",
        "SqLite",
      ],
    },
    {
      title: "FullStack Development",
      name: "Bazaar Buzz",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: HealthProBanner,
      images: [
        HealthProHome,
        HealthProDoctorDts,
        HealthProAppointment,
        HealthProProfile,
      ],
      links: [
        '<a  target="_blank" href="https://healthpro.onrender.com/">Go to website</a>',
        '<a target="_blank" href="https://github.com/Morshed-Ahmed/HealthPro">Github link</a>',
      ],
      description: [
        "Email Verification & Secure Authentication: Users must verify their email to activate their accounts, ensuring a secure login process.",
        "Patient Appointment Booking & Reviews: Patients can book appointments with doctors and provide reviews for their services.",
        "Doctor Profile Management: Doctors can view, edit, and delete patient records from their profile, making it easy to manage patient information.",
        "Homepage with Filters: The homepage displays doctors and patients, filtered by expertise, providing quick access to relevant information.",
        "Admin Dashboard: An administrative dashboard allows the admin to manage the website, including user roles, appointments, and reviews.",
        "User-friendly Interface: The system is designed with an intuitive and user-friendly interface, making it easy for both doctors and patients to navigate.",
        "Hosting & Deployment: The project includes hosting and deployment, making the system accessible online with a live link and GitHub repository for code management.",
      ],
      technologies: ["Django templates", "Bootstrap", "SqLite"],
    },
    {
      title: "FullStack Development",
      name: "Health Pro",
      content: "Integrating third-party APIs into applications.",
      imageUrl: cc,
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "FullStack Development",
      name: "Example Project 5",
      content:
        "Full Stack development involves both frontend and backend development.",
      imageUrl: BazaarBuzzBanner,
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "FullStack Development",
      name: "Example Project 6",
      content: "Integrating third-party APIs into applications.",
      imageUrl: cc,
      images: [BazaarBuzzBanner, cc],
    },
  ],
  ReactNative: [
    {
      title: "ReactNative Development",
      name: "Bazaar Buzz",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: BazaarBuzzBanner,
      link: {
        liveLink: "https://jribh.com/spacetime.6198bdf3.com",
        gitHubLink: "https://jribh.com/spacetime.6198bdf3.com",
      },
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Responsive Design",
      name: "Bazaar Buzz",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Frontend Development",
      name: "Example Project 1",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: BazaarBuzzBanner,
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Responsive Design",
      name: "Example Project 2",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Frontend Development",
      name: "Example Project 3",
      content:
        "Frontend development involves building the user interface of a web application.",
      imageUrl: BazaarBuzzBanner,
      images: [BazaarBuzzBanner, cc],
    },
    {
      title: "Responsive Design",
      name: "Example Project 4",
      content:
        "Building responsive and adaptive interfaces for various devices.",
      imageUrl: "https://jribh.com/spacetime.6198bdf3.png",
      images: [BazaarBuzzBanner, cc],
    },
  ],
};

const ITEMS_PER_PAGE = 3;

const SampleProjects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [modalContent, setModalContent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
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
          <div className="text-[#fffc]">
            {modalContent && (
              <>
                <h3 className="text-2xl ">{modalContent.name}</h3>
                <div className="flex flex-wrap gap-2 mb-10">
                  {/* <button className="text-[#b6abff] flex items-center gap-1">
                    Go to website <GoArrowUpRight />
                  </button>
                  <div className="border border-[#b6abff]"></div> */}
                  {modalContent.links.map((link, index) => (
                    <div key={index} className="flex  gap-2">
                      <div className="flex items-center gap-1 text-[#b6abff]  hover:text-[#9a8df1]">
                        <div
                          dangerouslySetInnerHTML={{ __html: link }}
                          className="text-[#b6abff]  hover:text-[#9a8df1]"
                        />
                        <GoArrowUpRight />
                      </div>
                      <div className="border border-[#b6abff]"></div>
                    </div>
                  ))}
                </div>

                <div className="columns-2 md:columns-3 lg:columns-3 gap-4 ">
                  {modalContent.images.map((imageName, index) => (
                    <img
                      key={index}
                      src={imageName}
                      alt={imageName}
                      className="mb-4 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 break-inside-avoid"
                    />
                  ))}
                </div>
                <div className="my-10">
                  {modalContent.description.map((des, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-3 mb-2">
                        <FaArrowRight className="mt-1" />
                        {des}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="my-10 flex flex-wrap gap-2">
                  <h1 className="font-bold">Technology use: </h1>
                  {modalContent.technologies.map((technologie, index) => (
                    <div key={index}>
                      <div className="">
                        {technologie}
                        {index + 1 == modalContent.technologies.length ? (
                          <>
                            <span>.</span>
                          </>
                        ) : (
                          <>
                            <span>,</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
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
