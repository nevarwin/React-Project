import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useParams, useLoaderData } from "react-router-dom";
import Spinner from "../components/Spinner";
import { job } from "../model/job";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";

const SingleJobPage = () => {
  const { id } = useParams();

  // using the useLoaderData hook
  // const job = useLoaderData();

  // useEffect with async/await way
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
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        // <!-- Go Back -->
        <>
          <section>
            <div className="container px-6 py-6 m-auto">
              <Link
                to="/jobs"
                className="flex items-center text-indigo-500 hover:text-indigo-600"
              >
                <FaArrowLeft className="mr-2 fas fa-arrow-left"></FaArrowLeft>{" "}
                Back to Job Listings
              </Link>
            </div>
          </section>
          <section className="bg-indigo-50">
            <div className="container px-6 py-10 m-auto">
              <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-70/30">
                <main>
                  <div className="p-6 text-center bg-white rounded-lg shadow-md md:text-left">
                    <div className="mb-4 text-gray-500">{job.type}</div>
                    <h1 className="mb-4 text-3xl font-bold">{job.title}</h1>
                    <div className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start">
                      <FaLocationArrow className="mr-2 text-lg text-orange-700 fa-solid fa-location-dot"></FaLocationArrow>
                      <p className="text-orange-700">{job.location}</p>
                    </div>
                  </div>

                  <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-6 text-lg font-bold text-indigo-800">
                      Job Description
                    </h3>

                    <p className="mb-4">{job.description}</p>

                    <h3 className="mb-2 text-lg font-bold text-indigo-800">
                      Salary
                    </h3>

                    <p className="mb-4">{job.salary}</p>
                  </div>
                </main>

                {/* <!-- Sidebar --> */}
                <aside>
                  {/* <!-- Company Info --> */}
                  <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-6 text-xl font-bold">Company Info</h3>

                    <h2 className="text-2xl">NewTek Solutions</h2>

                    <p className="my-2">
                      NewTek Solutions is a leading technology company
                      specializing in web development and digital solutions. We
                      pride ourselves on delivering high-quality products and
                      services to our clients while fostering a collaborative
                      and innovative work environment.
                    </p>

                    <hr className="my-4" />

                    <h3 className="text-xl">Contact Email:</h3>

                    <p className="p-2 my-2 font-bold bg-indigo-100">
                      contact@newteksolutions.com
                    </p>

                    <h3 className="text-xl">Contact Phone:</h3>

                    <p className="p-2 my-2 font-bold bg-indigo-100">
                      555-555-5555
                    </p>
                  </div>

                  {/* <!-- Manage --> */}
                  <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-6 text-xl font-bold">Manage Job</h3>
                    <a
                      href="/add-job.html"
                      className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >
                      Edit Job
                    </a>
                    <button className="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline">
                      Delete Job
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

// const jobLoader = async ({ params }: { params: { id: string } }) => {
//   const result = await fetch(`/api/jobs/${params.id}`);
//   const data = await result.json();
//   return data;
// };

export default SingleJobPage;
// export { SingleJobPage as default, jobLoader };
