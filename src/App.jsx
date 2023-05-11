import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import AcademicProfile from "./Components/AcademicProfile/AcademicProfile";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navbar />}>
            <Route index element={<About />} />
            <Route path="home" element={<About />} />
            <Route path="academic-profile" element={<AcademicProfile />} />
          </Route> */}
          <Route index element={<About />} />
          <Route path="home" element={<About />} />
          <Route path="academic-profile" element={<AcademicProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
