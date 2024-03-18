const Banner = () => {
  return (
    <div className=" bg-gradient-to-t from-white via-emerald-200 to-blue-300 lg:pb-0 xs:pb-16 xs:pt-10 lg:pt-0 flex items-center  lg:h-[100vh]">
      <div className="max-w-[1250px] px-4 mx-auto ">
        <div className="grid grid-cols-12 gap-7 mt-16">
          <div className="lg:col-span-6 xs:col-span-12">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-40">
                    {/* <img
                      src="https://framerusercontent.com/images/XCFWYUzA9x0xdApopQ9DT3Pucb8.png"
                      alt="avatar img"
                    /> */}

                    <img
                      src="https://i.ibb.co/mCMSsVC/undraw-feeling-proud-qne1.png"
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="card-title lg:text-4xl xs:text-3xl font-bold">
                  Hey, Im Morshed Ahmed
                </h2>
                <div className="flex justify-between lg:mt-2 xs:mt-0">
                  <div>
                    <h2 className="text-xl">
                      A Junior Full Stack Developer at Revolution
                    </h2>
                  </div>
                  <div>
                    <img
                      src="https://i.ibb.co/mytcbxt/751-share-gradient.gif"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3  xs:col-span-12">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <div className=" w-24">
                  <img
                    //   src="https://i.ibb.co/P9tM27W/56-document-flat.png"
                    src="https://i.ibb.co/7njXRT7/56-document-flat-1.png"
                    alt="avatar img"
                  />
                </div>
                <h2 className="text-base">LEARN MORE ABOUT ME</h2>
                <div className="flex justify-between lg:mt-0 xs:mt-0">
                  <div>
                    <h2 className="card-title lg:text-3xl xs:text-3xl font-bold">
                      See my resume
                    </h2>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1RMb4wFVFpH7WOq8wWQLHJKkozHvdFeMd/view"
                      target="_blank"
                    >
                      <img
                        src="https://i.ibb.co/mytcbxt/751-share-gradient.gif"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 xs:col-span-12">
            <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="">
                  <div className="flex justify-center ">
                    <img
                      className="w-52"
                      src="https://i.ibb.co/WVrBzDZ/alexander-shatov-9-Zjd7-PE-FRM-unsplash-removebg-preview.png"
                      alt="avatar img"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <a
                    href="https://www.linkedin.com/in/md-morshed-ahmed/"
                    target="_blank"
                  >
                    <img
                      src="https://i.ibb.co/mytcbxt/751-share-gradient.gif"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
