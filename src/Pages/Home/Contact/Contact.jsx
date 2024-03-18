import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className="max-w-[1250px] xs:px-4 lg:px-0 mx-auto">
        <div className=" lg:h-[100vh] xs:mt-24 lg:mt-0 flex items-center">
          <div className="grid grid-cols-12 gap-7">
            <div className="lg:col-span-5 xs:col-span-12">
              <div className="card bg-base-100 ">
                <div className="card-body">
                  <h1 className="card-title text-4xl font-bold">
                    Get in Touch ✨
                  </h1>
                  <p className="text-xl">
                    I’m always open to collaborate on a project or hear about an
                    opportunity!
                  </p>

                  <div className="my-8">
                    <p className="text-base">JUST WANT TO EMAIL ME?</p>
                    <h1 className="text-xl ">morshed.dv@gmail.com</h1>
                  </div>

                  <div className="flex gap-4 items-center">
                    <AiOutlineLinkedin
                      size={31}
                      className="hover:text-[#6C63FF] text-[#9A9997]"
                    />
                    <AiFillTwitterSquare
                      size={31}
                      className="hover:text-[#6C63FF] text-[#9A9997]"
                    />
                    <RiFacebookBoxLine
                      size={31}
                      className="hover:text-[#6C63FF] text-[#9A9997]"
                    />
                    <FiInstagram
                      size={30}
                      className="hover:text-[#6C63FF] text-[#9A9997]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 xs:col-span-12">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full "
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full "
                  />
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Type your message"
                  ></textarea>

                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
