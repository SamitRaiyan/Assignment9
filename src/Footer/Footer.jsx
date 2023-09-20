import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCopyright } from "@fortawesome/free-solid-svg-icons";
import Support from "./Support";
import Product from "./Product";
import Company from "./Company";
const Footer = () => {
  return (
    <div className=" bg-slate-700 py-7 px-3 md:px-11 rounded-md">
      <div className="flex justify-between md:px-5 py-3 items-stretch ">
        <div className=" text-indigo-300 w-48 ">
          <img
            className=" md:w-28 w-20 "
            src="../../public/Job_hunter-removebg-preview.png"
            alt=""
          />
          <p className=" text-left p-4  md:text-base text-xs">
            Job Hunter is a open source job posting site here you can find all
            your desired career opportunity.
          </p>
          <img className="pl-3" src="/Group 9969.png" alt=""/>
        </div>
        <Company></Company>
        <Product></Product>
        <Support></Support>

        <div className="flex flex-col gap-3 text-indigo-300 items-start ">
          <h2 className=" font-bold text-base md:text-lg">Contact</h2>
          <p className="md:text-base text-xs">524 Boardway,NYC</p>
          <p className="md:text-base text-xs">+1777-950-3659</p>
        </div>
      </div>
      <hr className="pb-1" />
      <div className="flex justify-between px-8 md:text-base text-sm">
        <p className="  text-indigo-300">
          <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2023, All
          rights reserved
        </p>
        <p className=" text-indigo-300">
          Powered by <span className=" font-bold">Job Hunter</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
