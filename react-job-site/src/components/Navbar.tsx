import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a
              className="flex items-center flex-shrink-0 mr-4"
              href="/index.html"
            >
              <img className="w-auto h-10" src={logo} alt="React Jobs" />
              <span className="hidden ml-2 text-2xl font-bold text-white md:block">
                React Jobs
              </span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to={"/"}
                  className="px-3 py-2 text-white bg-black rounded-md hover:bg-gray-900 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to={"/jobs"}
                  className="px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white"
                >
                  Jobs
                </Link>
                <Link
                  to={"/add-job"}
                  className="px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white"
                >
                  Add Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
