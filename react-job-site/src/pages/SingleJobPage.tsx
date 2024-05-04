import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { job } from "../model/job";

const SingleJobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState({} as job);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const result = await fetch(`/api/jobs/${id}`);
        const data = await result.json();
        setJob(data);
      } catch (error) {
        alert(`Failed to fetch job ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJob();
  });

  return (
    <div>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
        </div>
      )}
    </div>
  );
};

export default SingleJobPage;
