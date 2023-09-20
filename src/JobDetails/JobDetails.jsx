import React, { useEffect, useState } from "react";
import { addToDb } from "../../public/fakedb";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleDollarToSlot,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
  const handleApply = (id) => {
    addToDb(id);
  };
  let { jobId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data) =>
        setDetails(data.find((jobData) => jobData.jobId == jobId))
      );
  });
  const {
    jobDescription,
    jobResponsibilities,
    educationalRequirements,
    experienceNeeded,
    salary,
    contactEmail,
    contactPhoneNumber,
    jobLocation,
    jobTitle,
  } = details;
  return (
    <div>
      <div className="text-center ">
        <h1 className=" font-bold py-8 text-5xl font-mono  bg-blue-100 ">
          JOB Details
        </h1>
      </div>
      <div className=" mx-36 py-24 grid grid-cols-2">
        <div className=" text-slate-600">
          <p>
            <h1 className=" font-bold text-xl  font-mono text-slate-700 ">
              Job Description :{" "}
            </h1>
            {jobDescription}
          </p>
          <p>
            <h1 className=" font-bold text-xl font-mono  text-slate-700">
              Job Responsibility :{" "}
            </h1>{" "}
            {jobResponsibilities}
          </p>
          <h1 className=" font-bold text-xl  font-mono text-slate-700">
            Educational Requirements :
          </h1>
          <p>{educationalRequirements}</p>
          <h1 className=" font-bold text-xl font-mono text-slate-700">
            Experiences
          </h1>
          <p>{experienceNeeded}</p>
        </div>
        <div>
          <div className=" bg-blue-200 w-3/4 p-8  text-slate-600 rounded-xl flex flex-col gap-3">
            <h1  className=" font-bold text-lg">Job Details </h1>
            <hr  className=" border-gray-400" />
            <p className=" font-semibold text-base">
              <FontAwesomeIcon className="text-blue-700" icon={faCircleDollarToSlot} />
              {" "}Salary :<span className=" font-medium text-base">{salary}K (per anum) </span>
              
            </p>
            <p>
              <FontAwesomeIcon className="text-blue-700" icon={faCalendar} />
              <span className=" font-semibold text-base">{" "} Job Title:</span>{" "}
              {jobTitle}
            </p>

            <h1 className=" font-bold text-lg">Contact Information</h1>
            <hr className=" border-gray-400" />
            <p>
              <FontAwesomeIcon className="text-blue-700" icon={faPhone} />
               <span className=" font-semibold text-base"> Phone:</span>{" "}
              {contactPhoneNumber}{" "}
            </p>
            <p>
              <FontAwesomeIcon className="text-blue-700" icon={faEnvelope} />
              <span className=" font-semibold text-base"> Job Title:</span>{" "}
              {contactEmail}
            </p>
            <p>
              <FontAwesomeIcon className="text-blue-700" icon={faLocationDot} />
              <span className=" font-semibold text-base"> Job Title:</span>{" "}
              {jobLocation}{" "}
            </p>
          </div>
          <button className="px-4 py-2 text-white rounded-md my-2 bg-blue-600 w-3/4" onClick={()=>handleApply(jobId)}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
