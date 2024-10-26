import React from "react";
import { Link } from "react-router-dom";
export const ButtonPrimary = ({
  label,
  to = "",
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`w-full bg-primary100 flex justify-center items-center font-medium ease-in duration-200 transition 
      py-3 px-6 md:text-light100 text-xs whitespace-nowrap bg-gradient-to-l from-[#3CB597] hover:from-[#58F7D5]  to-[#58F7D5] hover:to-[#3CB597]
      hover:bg-primary200 ${className} ${disabled && "pointer-events-none"}`}
    >
      <p className="text-[#1E5953]">{label}</p>
    </Link>
  );
};
