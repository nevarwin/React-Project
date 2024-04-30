import JobListings from "../components/JobListings";

const JobPage = () => {
  return (
    <section className="px-4 py-6 bg-blue-50">
      <JobListings isHome={false} />
    </section>
  );
};

export default JobPage;
