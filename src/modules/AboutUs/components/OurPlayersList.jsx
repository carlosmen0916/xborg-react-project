import React from "react";
export const OurPlayersList = ({ avartaSrc, title, description }) => {
  return (
    <div className="p-[2px] flex items-center flex-col w-full bg-gradient-to-b from-primary200 to-[#1a312b]">
      <div className="bg-[#151d1b] w-full">
        <div className="bg-primary100 text-white text-2xl p-2 w-full">
          {title}
        </div>
        <div className="p-2">
          <div className="text-primary100 text-md absolute">{description}</div>
          <img src={avartaSrc} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};
