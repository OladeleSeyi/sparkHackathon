import React from "react";

const PriceList = ({ handleSelectAmount }) => {
  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-4">
      <div className="flex flex-row space-x-4">
        <button
          className="w-auto p-2 h-16 rounded-md bg-yellow-400 text-white flex items-center justify-center text-2xl font-extrabold"
          onClick={() => handleSelectAmount(3200)}
        >
          ₦3200
        </button>
        <button
          className="w-auto p-2 h-16 rounded-md bg-yellow-400 text-white flex items-center justify-center text-2xl font-extrabold"
          onClick={() => handleSelectAmount(5000)}
        >
          ₦5000
        </button>
        <button
          className="w-auto p-2 h-16 rounded-md bg-yellow-400 text-white flex items-center justify-center text-2xl font-extrabold"
          onClick={() => handleSelectAmount(7000)}
        >
          ₦7000
        </button>
        <button
          className="w-auto p-2 h-16 rounded-md bg-yellow-400 text-white flex items-center justify-center text-2xl font-extrabold"
          onClick={() => handleSelectAmount(10000)}
        >
          ₦10000
        </button>
      </div>
    </div>
  );
};

export default PriceList;
