import React from "react";
import {
  RiDiscordLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailAiLine,
  RiMailFill,
  RiMailLine,
} from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="contact"
        className="bg-gradient-to-r from-[#000000] to-[#05101d] text-white py-8"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <div className="grid gap-1 mb-4 grid-cols-[2fr_1.27fr_0.85fr]">
              <img
                src="/hrc.png"
                alt="Hansraj Logo"
                className="bg-white rounded-md p-2"
                // width={100}
                // height={100}
              />
              <img
                src="/iic.jpg"
                alt="IIC Logo"
                className="rounded-md"
                // width={100}
                // height={100}
              />
              <img
                src="/ordinateur.png"
                alt="Ordinateur Logo"
                // width={100}
                // height={100}
              />
            </div>
            <img
              src="/logo.png"
              alt="हंसInnoverse Logo"
              // width={200}
              // height={200}
            />
            <p className="text-xs text-gray-300 w-[105%] mt-2 font-mono">
              Welcome to हंसInnoverse, a 12-hour hackathon where innovation
              meets technology. Our event brings together creative minds to
              solve real-world challenges through cutting-edge technology
              solutions.
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="sm:ml-16 font-mont">
            <h3 className="font-semibold mb-4 text-2xl relative">
              <span className="relative">Quick Links</span>
              <span className="absolute left-0 bottom-[-4px] w-1/3 h-0.5 bg-cyan-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="relative group">
                  <span className="relative pb-2">Home</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative group">
                  <span className="relative pb-2">About</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#themes" className="relative group">
                  <span className="relative pb-2">Theme</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#timeline" className="relative group">
                  <span className="relative pb-2">Schedule</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1be5pkCyeRR_UDj7JGUkNt6_CkJ3h7-i9m4Ye_EaPI_A/edit?usp=sharing"
                  className="relative group"
                  target="_blank"
                >
                  <span className="relative pb-2">Guidelines</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <div className="flex space-x-2 mt-6">
              <a
                href="mailto:ordinateur.hrc.du@gmail.com"
                aria-label="Mail"
                className="bg-white bg-opacity-10 rounded-full p-2  text-white hover:text-cyan-400 hover:-translate-y-2 transition-all duration-200"
              >
                <RiMailLine className="text-2xl " />
              </a>
              <a
                href="https://www.instagram.com/ordinateur.hrc"
                target="_blank"
                aria-label="Instagram"
                className="bg-white bg-opacity-10 rounded-full p-2  text-white hover:text-cyan-400 hover:-translate-y-2 transition-all duration-200"
              >
                <RiInstagramLine className="text-2xl " />
              </a>
            </div>
          </div>

          {/* Contact and Get Involved Section */}
          <div>
            {/* <div className="h-[250px] w-full rounded-lg overflow-hidden"> */}
            <div className="h-full w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8890731166856!2d77.2102467!3d28.6797055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9a74a2aacf%3A0x59e09f11f71c1a54!2sHansraj+College!5e0!3m2!1sen!2sin!4v1707654321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-[5vh] border-t border-gray-700 bg-gray-900 text-white flex justify-center items-center px-4 text-center">
        <p className="text-sm flex sm:py-0 flex-col sm:flex-row">
          <p className="mx-1">Copyright © 2024 हंसInnoverse | </p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/kirti-rathi/"
              target="_blank"
              className="italic hover:text-cyan-400"
            >
              Kirti Rathi{" "}
            </a>
            &{" "}
            <a
              href="https://www.linkedin.com/in/parthratra11/"
              target="_blank"
              className="italic hover:text-cyan-400"
            >
              Parth Ratra
            </a>
          </p>
        </p>
      </div>
    </>
  );
};

export default Footer;
