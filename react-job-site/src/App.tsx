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
import DataLoader from "./components/DataLoader";
import AddJobPage from "./pages/AddJobPage";
import { job } from "./model/job";
import EditJobPage from "./pages/EditJobPage";

function App() {
  const addJob = async (newJob: job) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id: string) => {
    try {
      await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }

    return;
  };

  const editJob = async (editJob: job) => {
    await fetch(`/api/jobs/${editJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editJob),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<SingleJobPage deleteJob={deleteJob} />}
          loader={DataLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage editJobSubmit={editJob} />}
          loader={DataLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
