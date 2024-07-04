import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WelcomeBar from "../components/barLogin";
import Footer from "../components/Footer";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
    <header><WelcomeBar></WelcomeBar></header>
    <div className="flex-1 flex items-center justify-center relative overflow-hidden">
      {/* Carrusel de img */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className="absolute top-0 left-0 w-screen h-screen"
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
        className="w-full max-w-md bg-white rounded-[40px]  shadow-default py-10 px-16 relative z-10"
        style={{ fontFamily: "cursive" }}
      >
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-black text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Registro de Usuario
        </h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full p-2 mb-6 text-black border-b-2 border-[#E6D88A] outline-none focus:bg-gray-300"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className="text-red-500 ">Nombre de Usuario Requerido</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 mb-6 text-black border-b-2 border-[#E6D88A] outline-none focus:bg-gray-300"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 ">Email Requerido</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full p-2 mb-6 text-black border-b-2 border-[#E6D88A] outline-none focus:bg-gray-300"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500 ">Contraseña Requerida</p>
          )}
          <button
            className={"bg-[#4A3B25] w-full  hover:bg-[#E6D88A]   text-white font-bold py-2 px-4 mb-6 rounded-[20px]"}
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          <Link to="/login" className="text-lg text-[#4A3B25] hover:text-indigo-700 text-sm">Ya tienes una cuenta?
            Login
          </Link>
        </p>
      </div>
    </div>
    <footer className="mt-auto"><Footer></Footer></footer>
    </div>
  );
}

export default RegisterPage;
