import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./applied.css";
import { getShoppingCart } from "../../public/fakedb";
import Filter from "./Filter";
import JobSection from "./JobSection";
const AppliedJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  });
  // console.log(allJobs)
  
  const [remoteJob,setRemoteJob]=useState([]);
  const [onSiteJob,setOnsiteJob]=useState([]);

  const appliedJob = [];
  const stroedJob = getShoppingCart();
  for (const id in stroedJob) {
    let addedJob = allJobs.find((job) => job.jobId === id);
    if (addedJob) {
      appliedJob.push(addedJob);
    }
  }
  const [remote, setRemote] = useState(false);
  const [onsite, setOnsite] = useState(false);

  const handleRemote = (strings) => {
    setOnsite(false);
    setRemote(true)
    setRemoteJob(appliedJob.filter(job=>job.jobType==strings))

    
  };
  
  const handleOnsite = (strings) => {
    setRemote(false);
    setOnsite(true)
    
setOnsiteJob(appliedJob.filter(job=>job.jobType==strings))
    
  };
  

  return (
    <div>
      <header>
        <h1
          id="appliedHeader"
          className="py-10 text-center text-5xl font-mono text-slate-700"
        >
          Applied Jobs
        </h1>
      </header>
      <div className="mx-36 flex flex-col items-end py-6">
        <div>
          <Filter remote={handleRemote} onsite={handleOnsite}></Filter>
        </div>

        {!remote && !onsite &&
          appliedJob.map((jobs) => (
            <JobSection key={jobs.jobId} jobs={jobs}></JobSection>
          ))}
        {!remote && onsite &&
          onSiteJob.map((jobs) => (
            <JobSection key={jobs.jobId} jobs={jobs}></JobSection>
          ))}
        {remote && !onsite &&
          remoteJob.map((jobs) => (
            <JobSection key={jobs.jobId} jobs={jobs}></JobSection>
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
