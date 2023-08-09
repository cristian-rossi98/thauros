import React from "react";

const Header = ({ socialMedia }) => {
  return (
    <header className="h-screen w-screen fixed bg-gray-950 flex flex-col items-center py-40 z-0">
      <div>
        {socialMedia && socialMedia.map((social, index) => (
          <li className="list-none w-full mb-2.5" key={index}>
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center"
            >
              <div className="w-6 mr-4 flex items-center">
                {social.img}
              </div>
              <h1 className="text-2xl">{social.title}</h1>
            </a>
          </li>
        ))}
      </div>
    </header>
  );
};

export default Header;
