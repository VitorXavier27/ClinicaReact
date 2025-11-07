import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DashBord from "./pages/DashBord";
import Scheduling from "./pages/Scheduling";
import Patients from "./pages/Patients";
import Exams from "./pages/Exams";
import Samples from "./pages/Samples";
import Doctors from "./pages/Doctors";
import Guides from "./pages/Guides";
import TypesofAnalysis from "./pages/TypesofAnalysis";
import Equipment from "./pages/Equipment";
import Laboratories from "./pages/Laboratories";
import Reports from "./pages/Reports";
import Teste from "./pages/Teste";
import Report from "./pages/Report";
import { Link } from "react-router-dom";
import { Blank } from "./components/Blank";
import Register from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="flex">
          {/* <SideBar /> */}
          <Outlet />
          <Routes>
            <Route path="/DashBord" element={<DashBord />} />
            <Route path="/Scheduling" element={<Scheduling />} />
            <Route path="/Patients" element={<Patients />} />
            <Route path="/Exams" element={<Exams />} />
            <Route path="/Samples" element={<Samples />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Guides" element={<Guides />} />
            <Route path="/Type" element={<TypesofAnalysis />} />
            <Route path="/Equipment" element={<Equipment />} />
            <Route path="/Laboratories" element={<Laboratories />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
