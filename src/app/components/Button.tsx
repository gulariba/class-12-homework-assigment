import React from "react";

interface ButtonProps {
  btnText: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="w-full sm:w-[222px] h-[63px] bg-[#4F9CF9] rounded-lg px-3 py-2 gap-6 font-medium text-sm text-white hover:bg-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6] transition">
      {props.btnText}
    </button>
  );
};

export default Button;
