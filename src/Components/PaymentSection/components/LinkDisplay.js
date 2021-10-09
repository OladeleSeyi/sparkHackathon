import React from "react";

const LinkDisplay = ({ link }) => {
  return (
    <div className="h-16 rounded-md bg-green-300 text-white flex items-center  text-md">
      <p className="text-base mx-auto text-gray-900">
        {" "}
        Follow the
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 font-semibold"
        >
          {" "}
          link{" "}
        </a>
        to complete the Bank Transfer{" "}
      </p>
    </div>
  );
};

export default LinkDisplay;
