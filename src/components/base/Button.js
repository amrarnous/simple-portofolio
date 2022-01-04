import React from "react";

function Button({ text }) {
  return (
    <button className="border-none transition-all bg-red-600 hover:bg-red-500 p-3 px-6 text-white rounded-md">
      {text}
    </button>
  );
}

export default Button;
