import React from "react";
import {
  RiHome6Line,
  RiArchiveDrawerLine,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { SiPlotly } from "react-icons/si";
import { FaUser,FaFileArchive } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#4A3B25] fixed lg:left-0 top-0 w-30 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 `}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="pl-10 rounded-tl-xl rounded-bl-xl">
            <img src="/img/logoD.png" width={"100px"}></img>
            </h1>

          </li>
          <li className="bg-[#4A3B25] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#E4E287] p-4 flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-2xl" />
              <Link to={'../pages/Inicio'}>Inicio</Link>
              
            </a>
          </li>
          <li className="hover:bg-[#4A3B25] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="/Crud"
              className="group-hover:bg-[#E4E287] p-4 flex justify-center rounded-xl text-[#E4E287] group-hover:text-white transition-colors"
            >
              <RiArchiveDrawerLine className="text-2xl" />
              <Link to={'../Usuario'}>Gestionar Stock</Link>
            </a>
          </li>
          <li className="hover:bg-[#4A3B25] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#E4E287] p-4 flex justify-center rounded-xl text-[#E4E287] group-hover:text-white transition-colors"
            >
              <FaUser className="text-2xl" />
              <span className="ml-2">Usuario</span>
            </a>
          </li>
          <li className="hover:bg-[#4A3B25] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#E4E287] p-4 flex justify-center rounded-xl text-[#E4E287] group-hover:text-white transition-colors"
            >
              <FaFileArchive className="text-2xl" />
              <span className="ml-2">Documentos</span>
            </a>
          </li>
          <li className="hover:bg-[#4A3B25] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#E4E287] p-4 flex justify-center rounded-xl text-[#E4E287] group-hover:text-white transition-colors"
            >
              <SiPlotly className="text-2xl" />
              <span className="ml-2">Estadisticas</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#4A3B25] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#E4E287] p-4 flex justify-center rounded-xl text-[#E4E287] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
              <span className="ml-2">Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
