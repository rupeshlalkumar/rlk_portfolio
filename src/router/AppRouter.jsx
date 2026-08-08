import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;