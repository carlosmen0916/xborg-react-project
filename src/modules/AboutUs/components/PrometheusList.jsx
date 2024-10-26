import React from "react";
import { Images } from "../../../assets/imgs/Images";
export const PrometheusList = ({ avartaSrc, win, name, day, description }) => {
  return (
    <div>
      <div className="flex flex-row text-white border-primary100 border-b-2 py-4 pr-4">
        <div className="relative w-[60px] h-[60px]">
          {win && (
            <img
              src={Images.characters.cup01}
              className="absolute -top-2 left-0 rounded-full w-[20px] h-[20px]"
              alt=""
            />
          )}
          <img
            src={avartaSrc}
            className="absolute top-0 left-0 rounded-full w-[60px] h-[60px]"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start pl-4">
          <div className="flex flex-row">
            <p className="text-primary100  font-JosefinSans">{name}</p>
            <p className="pl-5 text-[10px] pt-[5px]">{day}</p>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <p>{description}</p>
            <p className="text-primary100 font-JosefinSans text-[14px]">View</p>
          </div>
        </div>
      </div>
    </div>
  );
};
