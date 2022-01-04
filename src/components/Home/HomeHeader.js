import React from "react";

function HomeHeader() {
  return (
    <div className="flex flex-col items-start">
      <div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--FUqL3FtQ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187518/fbbed23e-50d5-4d1d-b3b3-ef99cca9c3ef.jpg"
          alt=""
          className="rounded-full w-20"
        />
      </div>
      <h1 className="text-base lg:text-2xl mt-3 text-gray-700 font-bold">
        Welcome to my Portofolio <span className="font-normal">👋</span>
      </h1>
      <p className="text-lg leading-8 text-gray-500 mt-2 lg:max-w-5xl text-justify">
        I'm Amr. I'm 23-year-old, I'm a UI Designer & Front-end Web Developer
        who prioritizes simplicity and usability, Currently I'm a Freelancer
        Front-end Develope, Formerly Enter2Shop, SheenValue, DirectGroup I Love
        working on side projects, Very Interested in Web 3.0 & Blockchain.
      </p>
      <a
        href="#contact"
        className="text-lg mt-4 underline font-bold uppercase hover:text-red-500"
      >
        Contact Me
      </a>
    </div>
  );
}

export default HomeHeader;
