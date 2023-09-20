import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const {
    jobId,
    imageLink,
    jobType,
    jobTitle,
    jobLocation,
    jobTime,
    salary,
    companyName,
  } = props.job;
  return (
    <div className=" w-full shadow-lg shadow-blue-300 md:p-8 p-4 rounded-xl ">
      <img className="py-4 md:w-24 w-16 h-18" src={imageLink} alt={companyName} />
      <h2 className="font-bold text-slate-600">{jobTitle}</h2>
      <p className="text-gray-600">{companyName}</p>
      <div className="pb-4">
        <button className=" border-2 px-4 py-1 text-blue-500 rounded-md border-blue-600">
          {jobType}
        </button>
        <button className="border-2 px-4 py-1 mx-3 text-blue-500 rounded-md border-blue-600">
          {jobTime}
        </button>
      </div>
      <p className="pb-4 text-gray-500 text-sm md:text-base">
        <FontAwesomeIcon icon={faLocationDot} /> {jobLocation}{" "}
        <span className="px-3">
          {" "}
          <FontAwesomeIcon icon={faCircleDollarToSlot} /> Sallery: {salary}K
        </span>{" "}
      </p>
      <button className="px-4 py-1 text-white rounded-md bg-blue-600">
       <Link to={`/details/${jobId}`}>  view details</Link>
      </button>
    </div>
  );
};

export default JobCard;
