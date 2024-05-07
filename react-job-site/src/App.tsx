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
// import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobPage />} />
      <Route path="/jobs/:id" element={<SingleJobPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      {/* <Route path="/jobs/:id" element={<SingleJobPage />} loader={jobLoader} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
