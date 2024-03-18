import React from "react";

const ProjectModal = ({ projectDte }) => {
  console.log(projectDte);
  return (
    <div>
      <input type="checkbox" id="project-details" className="modal-toggle" />
      <div className="modal">
        <div className="no-scrollbar modal-box w-11/12 max-w-5xl relative">
          <div className="sticky top-0 bg-[#ACCBE1] flex items-center p-2 rounded ">
            <label
              htmlFor="project-details"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="lg:text-2xl xs:text-lg font-bold ">
              {projectDte?.title}
            </h3>
          </div>

          <p className="py-4">WEB APP</p>

          <div className="my-12">
            <h1 className="lg:text-4xl xs:text-2xl">Impotent Link</h1>

            <div className="flex lg:gap-4 xs:gap-2 lg:flex-row xs:flex-col lg:mt-12 xs:mt-6 ">
              {projectDte?.liveSiteLink && (
                <button className="btn glass text-[#6C63FF]">
                  <a
                    href={projectDte?.liveSiteLink}
                    className="link link-hover text-xl"
                  >
                    Live site link
                  </a>
                </button>
              )}
              {projectDte?.serverGitLink && (
                <button className="btn glass text-[#6C63FF]">
                  <a
                    href={projectDte?.serverGitLink}
                    className="link link-hover text-xl"
                  >
                    Github server site link
                  </a>
                </button>
              )}
              {projectDte?.clientGitLink && (
                <button className="btn glass text-[#6C63FF]">
                  <a
                    href={projectDte?.clientGitLink}
                    className="link link-hover text-xl"
                  >
                    Github client site link
                  </a>
                </button>
              )}
            </div>
          </div>

          <div>
            <div className="">
              <div className="my-12">
                <h1 className="lg:text-4xl xs:text-2xl">
                  Top Project Features
                </h1>
              </div>
              {projectDte?.imgOne && projectDte?.imgTwo && (
                <div className="border-2 p-2 flex lg:flex-row xs:flex-col gap-3 mb-5">
                  <div>
                    <img
                      className="rounded-lg"
                      src={projectDte?.imgOne}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="rounded-lg"
                      src={projectDte?.imgTwo}
                      alt=""
                    />
                  </div>
                </div>
              )}

              <p className="text-xl">{projectDte?.DescriptionOne}</p>
            </div>
            <div className="my-10">
              {projectDte?.imgThree && (
                <div className="border-2 p-2 mb-5">
                  <img src={projectDte?.imgThree} alt="" />
                </div>
              )}

              <p className="text-xl">{projectDte?.DescriptionTwo}</p>
            </div>
            <div className="my-10">
              {projectDte?.imgFour && (
                <div className="border-2 p-2 mb-5 flex justify-center">
                  <img src={projectDte?.imgFour} alt="" />
                </div>
              )}

              <p className="text-xl">{projectDte?.DescriptionThree}</p>
            </div>
            <div className="my-10">
              {projectDte?.imgFive && (
                <div className="border-2 p-2 mb-5 flex justify-center">
                  <img src={projectDte?.imgFive} alt="" />
                </div>
              )}

              <p className="text-xl">{projectDte?.DescriptionFour}</p>
            </div>
            <div className="my-10">
              {projectDte?.imgSix && (
                <div className="border-2 p-2 mb-5 flex justify-center">
                  <img src={projectDte?.imgSix} alt="" />
                </div>
              )}

              <p className="text-xl">
                {projectDte?.DescriptionFive && projectDte?.DescriptionFive}
              </p>
            </div>
            <div className="my-10">
              <h1 className="lg:text-4xl xs:text-2xl">
                Another Project Features
              </h1>
              {projectDte?.features.map((fe) => (
                <div>{fe}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
