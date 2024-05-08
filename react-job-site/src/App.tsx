import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./pages/JobPage";
import NotFound from "./pages/NotFound";
import SingleJobPage from "./pages/SingleJobPage";
import AddJobPage from "./pages/AddJobPage";
import { job } from "./model/job";
// import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";

function App() {
  const addJob = async (newJob: job) => {
    await fetch("api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/jobs/:id" element={<SingleJobPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        {/* <Route path="/jobs/:id" element={<SingleJobPage />} loader={jobLoader} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
