import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ socialMedia, handleLanguage, language }) => {
  const ptClass = `w-4 mr-1 md:w-8 ${language === 'en' && 'md:grayscale md:hover:grayscale-0 md:transition md:duration-300'}`;
  const enClass = `w-4 mr-1 md:w-8 ${language === 'pt' && 'md:grayscale md:hover:grayscale-0 md:transition md:duration-300'}`;

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
                    <div className="w-6 mr-4 flex items-center md:mx-2 xl:mx-3.5 md:w-12 transition duration-300 hover:scale-110">
                      {social.img}
                    </div>
                    <h1 className="text-2xl md:hidden">{social.title}</h1>
                  </a>
                </li>
              ))}
          </div>
          <div className="flex justify-between mt-8 md:justify-end md:mt-2">
            <button
              onClick={() => handleLanguage("pt")}
              className="flex items-center justify-center bg-blue-900 p-2 mr-1 w-1/2 rounded-md hover:bg-blue-950 md:bg-transparent md:hover:bg-transparent md:w-12 md:p-0 md:mr-0 md:justify-end"
            >
              <StaticImage
                className={ptClass}
                src="../../images/pt-flag.png"
                alt=""
              />
              <span className="md:hidden">PT</span>
            </button>
            <button
              onClick={() => handleLanguage("en")}
              className="flex items-center justify-center bg-blue-900 p-2 ml-1 w-1/2 rounded-md hover:bg-blue-950 md:bg-transparent md:hover:bg-transparent md:w-12 md:p-0 md:mr-0 md:justify-end"
            >
              <StaticImage
                className={enClass}
                src="../../images/en-flag.png"
                alt=""
              />
              <span className="md:hidden">EN</span>
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
