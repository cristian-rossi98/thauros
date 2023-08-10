import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ socialMedia, handleLanguage }) => {
  return (
    <>
      {/* <header className="h-screen w-screen fixed bg-gray-950 flex flex-col items-center py-24 z-40 overflow-y-auto">
     <div> */}
      <header className="h-screen w-screen fixed bg-gray-950 flex flex-col items-center py-24 z-40 overflow-y-auto md:w-full md:justify-center md:bg-transparent md:h-full md:static md:py-8">
        <div className="md:w-2/4 lg:w-2/5">
        <div className="hidden md:block mb-8">
          <StaticImage
                src="../../images/thauros-logo.png"
                alt="Thauros Logo"
              />
        </div>
          <div className="md:flex md:flex-wrap md:justify-center ">
            {socialMedia &&
              socialMedia.map((social, index) => (
                <li className="list-none w-full mb-2.5 md:w-10 xl:w-14" key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-row items-center"
                  >
                    <div className="w-12 mr-4 flex items-center md:mx-2 xl:mx-3.5">
                      {social.img}
                    </div>
                    <h1 className="text-2xl md:hidden">{social.title}</h1>
                  </a>
                </li>
              ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => handleLanguage("pt")}
              className="flex items-center justify-center bg-blue-900 p-2 mr-1 w-1/2 rounded-md hover:bg-blue-950"
            >
              <StaticImage
                className="w-4 mr-1"
                src="../../images/pt-flag.png"
                alt=""
              />
              <span>PT</span>
            </button>
            <button
              onClick={() => handleLanguage("en")}
              className="flex items-center justify-center bg-blue-900 p-2 ml-1 w-1/2 rounded-md hover:bg-blue-950"
            >
              <StaticImage
                className="w-4 mr-1"
                src="../../images/en-flag.png"
                alt=""
              />
              <span>EN</span>
            </button>
          </div>
        </div>
      </header>
      {/*    </div>
     </header> */}
    </>
  );
};

export default Header;
