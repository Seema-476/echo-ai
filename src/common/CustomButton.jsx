import React from "react";

const CustomButton = ({ text, classStyle }) => {
  return (
    <button
      className={`shadow-inner shadow-light-purple bg-gradient-to-r from-blue to-light-blue text-white font-semibold rounded-[57px] transition-transform hover:scale-95 duration-700 text-base sm:text-xl sm:leading-custom-2xl ${classStyle}`}>
      {text}</button>
  );
};

export default CustomButton;