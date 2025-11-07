import { BsFillHospitalFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-around h-15 items-center bg-blue-400 shadow">
      <div className="flex items-center">
        <BsFillHospitalFill className="w-20 h-10" />
        <Link to="/DashBord" className="text-2xl">
          Clinica IFTM
        </Link>
      </div>

      <div className="flex items-center">
        <FaUserDoctor className="w-10 h-8" />

        <h1>Dr.Xavier</h1>
      </div>

      {/* <div className="flex gap-3 items-center">
        <Link to="/Register" className="w-20 h-10">
          Register
        </Link>
        <Link to="/Login" className="w-20 h-10">
          Login
        </Link>
      </div> */}
    </nav>
  );
}

export default NavBar;
