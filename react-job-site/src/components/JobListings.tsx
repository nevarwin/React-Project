import { useState, useEffect } from "react";

import JobListing from "./JobListing";
import Spinner from "./Spinner";
import { job } from "../model/job";

interface JobListingsProp {
  isHome: boolean;
}

const JobListings: React.FC<JobListingsProp> = ({ isHome }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  const [jobs, setJobs] = useState<job[]>([]);
  const [loading, setLoading] = useState(true);

  // getting the data from the jobs.json file
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        alert(`Failed to fetch jobs ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
