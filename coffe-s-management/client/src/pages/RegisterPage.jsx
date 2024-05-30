import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
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
        className="w-full max-w-md bg-white rounded-[40px] border-[#E6D88A] border-4 shadow-default py-10 px-16 relative z-10"
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
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-black"
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className="text-red-500 ">Username is required</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-black"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 ">Email is required</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-black"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500 ">Password is required</p>
          )}
          <button
            className={`bg-[#4A3B25] py-4 px-6 text-sm text-white rounded-[20px] border border-red focus:outline-none focus:border-green-dark`}
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿tiene una cuenta?
          <Link to="/login" className="text-sky-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
