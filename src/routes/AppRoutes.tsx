import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../components/Spinner";

const Home = lazy(() => import("../pages/Home/Home"));
const ProjectDetail = lazy(() => import("../pages/Projects/ProjectDetails"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:title" element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  );
};
