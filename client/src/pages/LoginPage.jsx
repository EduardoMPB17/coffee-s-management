import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
import WelcomeBar from "../components/barLogin";
import Footer from "../components/Footer";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const [redirect, setRedirect] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    await signin(data);
    setRedirect(true);
  });

  if (redirect) {
    return <Navigate to="/inicio" />;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header>
        <WelcomeBar />
      </header>
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Carrusel de img */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div>
            <img
              src="/img/p1.jpg"
              alt="imagen1"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src="/img/p2.jpg"
              alt="Imagen 2"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src="/img/p3.jpg"
              alt="Imagen 3"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <img
              src="/img/p4.jpg"
              alt="Imagen 4"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Carousel>

        <div
          className="w-full max-w-md bg-white rounded-[40px] shadow-default py-10 px-16 relative z-10"
          style={{ fontFamily: "cursive" }}
        >
          {signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
              {error}
            </div>
          ))}
          <header>
            <img class="w-28  mx-auto mb-5" src="/img/logoD.png" />
          </header> 
          <form onSubmit={onSubmit}>
          <label class="block mb-2 text-black" for="username">Usuario</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full p-2 mb-6 text-black border-b-2 border-[#E6D88A] outline-none focus:bg-gray-300"
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.email && <p className="text-red-500">Email requerido</p>}
            <label class="block mb-2 text-black" for="username">Contraseña</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full p-2 mb-6 text-[#E6D88A] border-b-2 border-[#E6D88A] outline-none focus:bg-gray-300"
              placeholder="Ingresa tu Contraseña"
            />
            {errors.password && (
              <p className="text-red-500">Contraseña requerida</p>
            )}

            <button
              className="bg-[#4A3B25] w-full  hover:bg-[#E6D88A]   text-white font-bold py-2 px-4 mb-6 rounded-[20px]"
              type="submit"
            >
              Ingresar
            </button>
          </form>
          <p className="text-[#4A3B25] hover:text-indigo-700 text-sm ">
            ¿No tiene alguna cuenta?{" "}
            <Link to="/register" className="text-[#4A3B25] hover:text-indigo-700 text-sm">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default LoginPage;