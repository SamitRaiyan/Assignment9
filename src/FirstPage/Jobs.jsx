import React, { useState } from "react";
import JobCard from "./JobCard";

const Jobs = (props) => {
  const newdata = props.data;
  const [showAll,setShowAll]=useState(false)
    const display=()=>{
        setShowAll(true)
        
    }
    const hide=()=>{
        setShowAll(false)
    }
  return (
    <div className="py-8">
      <div className="text-center">
        <h1 className="font-bold text-xl md:text-4xl">Featured Jobs</h1>
        <p className='md:text-base text-sm'>These are some Jobs with most attractive package</p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 mx-5 md:mx-36 gap-x-8 gap-y-8">
        {newdata.slice(0,showAll?newdata.length:4).map((job) => (
          <JobCard key={job.jobId} job={job} ></JobCard>
        ))}
      </div>
      <div className="flex justify-around  pt-8">
        {
            !showAll &&<button className="px-5  py-2 text-white rounded-md bg-blue-600" onClick={display}>See All Jobs</button>
        }
        {
            showAll && <button className="px-5  py-2 text-white rounded-md bg-blue-600" onClick={hide}>See less</button>
        }
        
      </div>
    </div>
  );
};

export default Jobs;
