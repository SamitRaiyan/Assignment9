import { faBars, faCross, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <header className=" flex  items-center justify-between bg-blue-100  rounded-t-md px-20 ">
        <img
          className="relative right-14 md:static md:w-28 w-20"
          src="/Job_hunter-removebg-preview.png"
          alt="Job Hunting"
        />
        <div className={`flex md:flex-row flex-col relative left-24 md:static duration-500 ${open?'top-10': '-top-36'} bg-blue-100 p-4 rounded-md`}>
          <Link className="px-3" to="/">
            Home
          </Link>
          <Link className="px-3" to="/Statistic">
            Statistics
          </Link>
          <Link className="px-3" to="/Applied">
            Applied Jobs
          </Link>
          <Link className="px-3" to="/Blog">
            Blog
          </Link>
        </div>
        <button className="  bg-blue-500 text-sm md:text-base text-white md:px-4 md:py-2 px-3 py-1 rounded-md  relative right-24 md:static">
          Start Applying
        </button>
        <div  onClick={() => setopen(!open)} className="md:hidden relative right-3">
          <span>
            {open === true ? (
              <FontAwesomeIcon className="h-6 w-6" icon={faMultiply} />
            ) : (
              <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
            )}
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
