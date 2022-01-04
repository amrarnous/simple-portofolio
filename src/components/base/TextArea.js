import React from "react";

function Input({ placeholder }) {
  return (
    <div className="w-full relative mb-3">
      <textarea
        className="transition-all h-12 border p-3 hover:border-red-500 focus:border-red-500 rounded-sm w-full min-h-[150px] outline-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default Input;
