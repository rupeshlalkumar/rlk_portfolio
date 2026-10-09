
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

// Import these pages when their components are created.
// import Businesses from "../pages/Businesses";
// import Journey from "../pages/Journey";
// import Content from "../pages/Content";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
// import Terms from "../pages/Terms";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />

        {/* Add these routes when the pages exist. */}
        {/* <Route path="businesses" element={<Businesses />} /> */}
        {/* <Route path="journey" element={<Journey />} /> */}
        {/* <Route path="content" element={<Content />} /> */}
        {/* <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="terms" element={<Terms />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRouter;