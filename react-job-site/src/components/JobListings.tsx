import jobs from "../jobs.json";

const JobListings = () => {
  console.log(jobs);
  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobs.map((job) => (
            <div className="relative bg-white shadow-md rounded-xl">
              <div className="p-4">
                <div className="mb-6">
                  <div className="my-2 text-gray-600">{job.type}</div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">{job.description}</div>

                <h3 className="mb-2 text-indigo-500">{job.salary}</h3>

                <div className="mb-5 border border-gray-100"></div>

                <div className="flex flex-col justify-between mb-4 lg:flex-row sm:flex-column">
                  <div className="mb-3 text-orange-700">
                    <i className="text-lg fa-solid fa-location-dot"></i>
                    {job.location}
                  </div>
                  <a
                    href={`job/${job.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
