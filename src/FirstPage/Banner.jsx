import React from "react";

const Banner = () => {
  return (
    <div className="flex bg-blue-100 items-center gap-0  md:justify-between justify-around w-auto  md:px-24">
      <div className="flex flex-col items-start gap-3 md:gap-9 md:w-1/2 md:pt-20 pt-1 pb-3 w-40">
        <h1 className="  text-start md:text-6xl text-xl">One Step <br /> Closer To Your <br /> <span className=" text-indigo-500">Dream Job</span> </h1>
        <p className=" text-start md:text-base text-sm">Explore a world of great opportunities, grab your dream career with all the information you need to complete this journey from start to end !!!</p>
        <button  className="md:text-base md:px-5 px-3 py-2 bg-indigo-500 rounded-md text-white">Get Started </button>
      </div>
      <img className="md:w-1/2 w-36 h-40 md:h-auto" src="P3OLGJ1 copy 1.png" alt="job seeker" />
    </div>
  );
};

export default Banner;
