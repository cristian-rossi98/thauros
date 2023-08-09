import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ socialMedia, handleLanguage }) => {
  return (
    <header className="h-screen w-screen fixed bg-gray-950 flex flex-col items-center py-24 z-0">
      <div>
        {socialMedia &&
          socialMedia.map((social, index) => (
            <li className="list-none w-full mb-2.5" key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center"
              >
                <div className="w-6 mr-4 flex items-center">{social.img}</div>
                <h1 className="text-2xl">{social.title}</h1>
              </a>
            </li>
          ))}
        <div className="flex justify-between">
          <button onClick={() => handleLanguage('pt')} className="flex items-center justify-center bg-blue-900 p-2 mr-1 w-1/2 rounded-md hover:bg-blue-950">
            <StaticImage className="w-4 mr-1" src="../../images/pt-flag.png" alt=""/>
            <span>PT</span>
          </button>
          <button onClick={() => handleLanguage('en')} className="flex items-center justify-center bg-blue-900 p-2 ml-1 w-1/2 rounded-md hover:bg-blue-950">
            <StaticImage className="w-4 mr-1" src="../../images/en-flag.png" alt=""/>
            <span>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
