import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import toast from "react-hot-toast";

const ToastCustom = (lang) => {
  const description =
    lang === "pt" ? "Já assistiu meu full set?" : "Have you watch my full set?";
  const watch = lang === "pt" ? "Assistir agora" : "Watch now";

  const handleWatch = (t) => {
    window.open("https://youtu.be/OA_HCNQ8dWM", "_blank");
    toast.dismiss(t.id);
  };

  return (
    <>
      {toast &&
        toast.custom(
          (t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <StaticImage
                      src="../../images/profile.jpg"
                      alt="Profile"
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">Thauros</p>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => handleWatch(t)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {watch}
                </button>
              </div>
            </div>
          ),
          {
            duration: 5000,
          }
        )}
    </>
  );
};

export default ToastCustom;
