import { useContext, useState } from "react";
import { ProjectContext } from "../../../Context/ProjectData";

const SampleProjects = () => {
  const { projects } = useContext(ProjectContext);
  console.log(projects);

  const [modalData, setModalData] = useState(null);

  const openModal = (project) => {
    setModalData(project);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <div>
      <div className="container mb-28 mx-auto">
        <div className="text-center">
          <h3 className="text-xl">Sample Projects</h3>
          <h1 className="text-4xl font-bold">A few samples of my work</h1>
        </div>

        <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-8  mt-20">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project?.id}
              className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              onClick={() => openModal(project)}
            >
              <div className="card  bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={project?.bgImg} alt="Project Background" />
                </figure>
                <div className="card-body">
                  <h2 className="font-bold">{project?.category}</h2>
                  <h1 className="lg:text-4xl xs:text-2xl font-bold">
                    {project?.title}
                  </h1>
                  {project?.technologies && (
                    <div>
                      <h3>Technologies Used:</h3>
                      <ul>
                        {project.technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg text-center">
              {modalData?.title}
            </h3>
            <a
              href={modalData?.liveSiteLink}
              target="_blank"
              className="btn btn-sm"
            >
              Live Link
            </a>
            <a
              href={modalData?.clientGitLink}
              target="_blank"
              className="btn btn-sm"
            >
              GitHub
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
              {/* Left side (image) */}
              <div className="lg:col-span-1">
                <a
                  href={modalData?.imgOne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalData?.imgOne}
                    alt="Banner"
                    className="w-full"
                  />
                </a>
              </div>

              {/* Right side (content) */}
              <div className="lg:col-span-3">
                <div className="p-4">
                  <p className="text-lg mb-4">{modalData?.DescriptionOne}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
              {/* Left side (image) */}
              <div className="lg:col-span-1">
                <a
                  href={modalData?.imgTwo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalData?.imgTwo}
                    alt="Banner"
                    className="w-full"
                  />
                </a>
              </div>

              {/* Right side (content) */}
              <div className="lg:col-span-3">
                <div className="p-4">
                  <p className="text-lg mb-4">{modalData?.DescriptionTwo}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
              {/* Left side (image) */}
              <div className="lg:col-span-1">
                <a
                  href={modalData?.imgThree}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalData?.imgThree}
                    alt="Banner"
                    className="w-full"
                  />
                </a>
              </div>

              {/* Right side (content) */}
              <div className="lg:col-span-3">
                <div className="p-4">
                  <p className="text-lg mb-4">{modalData?.DescriptionThree}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
              {/* Left side (image) */}
              <div className="lg:col-span-1">
                <a
                  href={modalData?.imgFour}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalData?.imgFour}
                    alt="Banner"
                    className="w-full"
                  />
                </a>
              </div>

              {/* Right side (content) */}
              <div className="lg:col-span-3">
                <div className="p-4">
                  <p className="text-lg mb-4">{modalData?.DescriptionFour}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start mt-10">
              {/* Left side (image) */}
              <div className="lg:col-span-1">
                <a
                  href={modalData?.imgFive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalData?.imgFive}
                    alt="Banner"
                    className="w-full"
                  />
                </a>
              </div>

              {/* Right side (content) */}
              <div className="lg:col-span-3">
                <div className="p-4">
                  <p className="text-lg mb-4">{modalData?.DescriptionFive}</p>
                </div>
              </div>
            </div>

            <h1 className="">Technology Use</h1>

            {modalData?.technologyUse.map((item, index) => (
              <h1 key={index} className="flex font-bold ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>

                {item}
              </h1>
            ))}
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default SampleProjects;
