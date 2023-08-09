import React from "react";

const Header = ({ socialMedia }) => {
  return (
    <header className="h-screen w-screen fixed bg-gray-950 flex flex-col items-center py-40 z-0">
      {socialMedia.map((social, index) => (
        <li className="list-none w-full px-28 mb-2" key={index}>
          <a href={social.link} target="_blank" className="flex flex-row items-center">
            <div className="w-4 mr-4">
              <img className="invert" src={social.img} alt="" />
            </div>
            <h1 className="text-xl">{social.title}</h1>
          </a>
        </li>
      ))}
      {/* <h1>instagram</h1>
      <h1>youtube</h1>
      <h1>spotify</h1>
      <h1>soundcoud</h1>
      <h1>beatport</h1>
      <h1>apple music</h1>
      <h1>deezer</h1>
      <h1>bookings</h1> */}
    </header>
  );
};

export default Header;
