import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

//completar usuario con BD
const WelcomeBar = ({ username }) => {
  return (
    <div className="relative flex w-full flex-nowrap items-center justify-between bg-[#E6D88A] shadow-lg py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3 py-3">
        <div className="ms-2 px-4">
          <h1
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4  pr-5 text-2xl ">
          Coffee's Management
          </h1>
        </div>
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent3"
        >
          <ul className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
            <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
              <Link to={"/Contacto"}>
              <a className="p-0 text-black/60 transition duration-200 hover:text-black/80 focus:text-black/80 active:text-black/80 lg:px-2"
                ><MdOutlineEmail className="inline-block mr-1 text-2xl" />
                Contactanos
              </a>
              </Link>
            </li>
            <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
              <Link to={"/Info"}>
              <a className="p-0 text-black/60 transition duration-200 hover:text-black/80 focus:text-black/80 active:text-black/80 lg:px-2"
                href="#"><HiOutlineInformationCircle className="inline-block mr-1 text-2xl"></HiOutlineInformationCircle>
                Acerca de Nosotros
              </a>
              </Link>
            </li>
            <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 ">
              <a className="p-0 text-black/60 transition duration-200 hover:text-black/80 focus:text-black/80 active:text-black/80 lg:px-2"
                href="#"><IoMdHelpCircleOutline className="inline-block mr-1 text-2xl"></IoMdHelpCircleOutline>
                Tienes un Problema?
              </a>
            </li>
          </ul>
          <span className="ms-2 text-black/60 text-2xl">
            Bienvenido {username ? username : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBar;

