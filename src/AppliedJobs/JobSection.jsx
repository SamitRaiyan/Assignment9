import React from "react";
import { Link } from "react-router-dom";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const JobSection = (props) => {
  const jobs = props.jobs;
  const {
    jobId,
    imageLink,
    jobType,
    jobTitle,
    jobLocation,
    jobTime,
    salary,
    companyName,
  } = jobs;
  return (
    <div className="flex w-full items-center justify-between border-gray-500 border-2 my-5 rounded-lg ">
      <div className="flex items-center">
        <img
          className="w-44 rounded-lg px-4"
          src={imageLink}
          alt={companyName}
        />
        <div className="py-4">
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
          <p className="pb-4 text-gray-500">
            <FontAwesomeIcon icon={faLocationDot} /> {jobLocation}{" "}
            <span className="px-3 font-semibold">
              {" "}
              <FontAwesomeIcon icon={faCircleDollarToSlot} /> Sallery: 
            </span>{salary}K
          </p>
        </div>
      </div>

      <button className="px-4 py-2 text-white rounded-md bg-blue-600 mx-6">
        <Link to={`/details/${jobId}`}> view details</Link>
      </button>
    </div>
  );
};

export default JobSection;
