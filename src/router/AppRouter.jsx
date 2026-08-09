import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services"
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;