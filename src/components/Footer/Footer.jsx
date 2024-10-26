import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="md:flex hidden w-full justify-center items-center absolute bottom-0 text-[#D1D3D4] mb-4 font-JosefinSans opacity-70 z-0">
      <Link to="" className="pl-5">
        <div>Term of use</div>
      </Link>
      <Link to="" className="pl-5">
        <div>White Paper</div>
      </Link>
      <Link to="" className="pl-5">
        <div>Launchpad</div>
      </Link>
      <Link to="" className="pl-5">
        <div>Esport 3.0</div>
      </Link>
      {/* <Link to="" className="pl-5">
        <div>XCS</div>
      </Link> */}
      <Link to="" className="pl-5">
        <div>About</div>
      </Link>
      <Link to="" className="pl-5">
        <div>FAQ</div>
      </Link>
    </footer>
  );
};
