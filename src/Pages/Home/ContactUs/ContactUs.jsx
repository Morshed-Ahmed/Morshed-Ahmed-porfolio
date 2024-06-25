import { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { RxDownload } from "react-icons/rx";

const ContactUs = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div id="contact" className="bg-[#0f0b2a] text-white ">
      <div className="md:w-3/5 xs:w-full mx-auto p-2 py-16 ">
        <hr />
        <div className="md:w-1/2 mx-auto pt-10">
          <h1 className="md:text-3xl xs:text-3xl font-bold text-[#7E6EE7] ">
            Let&apos;s connect.
          </h1>

          <form className="flex flex-col gap-5 mt-5">
            <label className="">
              <span className=" text-sm font-medium text-[#dddd]">
                Username
              </span>
              <input
                type="text"
                className="mt-1  w-full px-3 py-2 bg-transparent border border-[#dddd]  text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-white focus:ring-0 focus:ring-white
                "
              />
            </label>
            <label className="">
              <span className=" text-sm font-medium text-[#dddd]">
                Email Address
              </span>
              <input
                type="email"
                className="mt-1  w-full px-3 py-2 bg-transparent border border-[#dddd]  text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-white focus:ring-0 focus:ring-white
                "
              />
            </label>
            <label className="">
              <span className=" text-sm font-medium text-[#dddd]">
                Username
              </span>
              <textarea
                rows="8"
                type="text"
                className="mt-1  w-full px-3 py-2 bg-transparent border border-[#dddd]  text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-white focus:ring-0 focus:ring-white
                "
              />
            </label>

            <div className="flex justify-between">
              <button className="flex items-center text-xs gap-3 font-medium border border-[#453C80] hover:bg-[#453C80] px-3 text-[#726b9d] hover:text-[white] py-2">
                Download Resume
                <RxDownload />
              </button>
              <button className="flex items-center text-xs gap-3 font-medium border border-[#453C80] bg-[#453C80] px-3  text-[white] py-2">
                Send Message
              </button>
            </div>
          </form>

          <div className="flex justify-center mt-16 ">
            <div
              className=" "
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            >
              <button className="text-[#726b9d] flex items-center gap-2 justify-center">
                Back to top
                <IoIosArrowDropup />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
