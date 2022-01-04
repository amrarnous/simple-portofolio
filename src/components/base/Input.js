import React from "react";

function Input({ type, placeholder }) {
  return (
    <div className="w-full relative mb-3">
      <input
        className="transition-all h-12 border pl-3 hover:border-red-500 rounded-sm w-full focus:border-red-500 outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
