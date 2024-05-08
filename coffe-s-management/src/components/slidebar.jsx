import React from "react";
import { RiHome6Line, RiArchiveDrawerLine, RiLogoutCircleRLine } from "react-icons/ri";
import { FaUser, FaFileArchive } from "react-icons/fa";
import { SiPlotly } from "react-icons/si";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div className='bg-[#4A3B25] h-full fixed' style={{ width: "250px" }}>
        <ul className="flex flex-col space-y-3">

          <li className='flex justify-center items-center'>
            <img src="/img/logoD.png" className="p-2 w-24 h-24 object-contain"/>
          </li>

          <li className="hover:bg-[#4A3B25] p-4 rounded-xl group transition-colors">
            <Link to='/Inicio' className="group-hover:bg-[#E4E287] p-4 flex rounded-xl text-[#E4E287] group-hover:text-white transition-colors">
              <RiHome6Line className="text-2xl" />
              <span className="ml-2">Inicio</span>
            </Link>
          </li>

          <li className="hover:bg-[#4A3B25] p-4 rounded-xl group transition-colors">
            <Link to='/Inventario' className="group-hover:bg-[#E4E287] p-4 flex rounded-xl text-[#E4E287] group-hover:text-white transition-colors">
              <RiArchiveDrawerLine className="text-2xl" />
              <span className="ml-2">Gestionar stock</span>
            </Link>
          </li>

          <li className="hover:bg-[#4A3B25] p-4 rounded-xl group transition-colors">
            <Link to='/Usuario' className="group-hover:bg-[#E4E287] p-4 flex rounded-xl text-[#E4E287] group-hover:text-white transition-colors">
              <FaUser className="text-2xl" />
              <span className="ml-2">Usuario</span>
            </Link>
          </li>

          <li className="hover:bg-[#4A3B25] p-4 rounded-xl group transition-colors">
            <Link to='/Documentos' className="group-hover:bg-[#E4E287] p-4 flex rounded-xl text-[#E4E287] group-hover:text-white transition-colors">
              <FaFileArchive className="text-2xl" />
              <span className="ml-2">Documentos</span>
            </Link>
          </li>

          <li className="hover:bg-[#4A3B25] p-4 rounded-xl group transition-colors">
            <Link to='/Estadistics' className="group-hover:bg-[#E4E287] p-4 flex rounded-xl text-[#E4E287] group-hover:text-white transition-colors">
              <SiPlotly className="text-2xl" />
              <span className="ml-2">Estadisticas</span>
            </Link>
          </li>

          <li className="hover:bg-[#4A3B25] p-4 rounded-xl group transition-colors">
            <Link className="group-hover:bg-[#E4E287] p-4 flex rounded-xl text-[#E4E287] group-hover:text-white transition-colors" >
              <RiLogoutCircleRLine className="text-2xl" />
              <span className="ml-2">Cerrar Sesión</span>
            </Link>
          </li>

        </ul>
    </div>
  );
};

export default Sidebar;
