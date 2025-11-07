import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { CiMedicalClipboard } from "react-icons/ci";
import { SlChemistry } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";
import { RiNewspaperLine } from "react-icons/ri";
import { SiLibreoffice } from "react-icons/si";
import { BsGear } from "react-icons/bs";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { HiOutlineDocumentReport } from "react-icons/hi";

const SideBar = () => {
  return (
    <aside className="bg-white h-screen w-64 shadow-md">
      <span className="text-[#c85050] ml-2">PRINCIPAL</span>
      <ul className="flex flex-col gap-5 ml-2 mt-3">
        <li className="flex ">
          <NavLink to="/DashBord" className=" flex items-center gap-2">
            <IoHomeOutline />
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Scheduling" className="flex items-center gap-2">
            <CiCalendar />
            Agendamento
          </NavLink>
        </li>
        <li>
          <NavLink to="/Patients" className="flex items-center gap-2">
            <SlPeople />
            Pacientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/Exams" className="flex items-center gap-2">
            <CiMedicalClipboard />
            Exames
          </NavLink>
        </li>
        <li>
          <NavLink to="/Samples" className="flex item-center gap-2">
            <SlChemistry />
            Amostras
          </NavLink>
        </li>
        <li>
          <NavLink to="/Doctors" className="flex item-center gap-2">
            <FaUserDoctor />
            Medicos
          </NavLink>
        </li>

        <span className="text-[#c85050]">ADMINISTRAÇÃO</span>

        <li>
          <NavLink to="/Guides" className="flex item-center gap-2">
            <RiNewspaperLine />
            Guias
          </NavLink>
        </li>

        <li>
          <NavLink to="/Type" className="flex item-center gap-2">
            <SiLibreoffice />
            Tipo de Analise
          </NavLink>
        </li>
        <li>
          <NavLink to="/Equipment" className="flex item-center gap-2">
            <BsGear />
            Equipamentos
          </NavLink>
        </li>
        <li>
          <NavLink to="/Laboratories" className="flex item-center gap-2">
            <PiBuildingOfficeLight />
            Laboratorios
          </NavLink>
        </li>
        <li>
          <NavLink to="/Reports" className="flex item-center gap-2">
            <HiOutlineDocumentReport />
            Relatorios
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
