import { useLoaderData } from "react-router-dom";
import { job } from "../model/job";

const EditJobPage = () => {
  const job = useLoaderData() as job;

  return <div>{job.title}</div>;
};

export default EditJobPage;
