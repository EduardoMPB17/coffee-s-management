import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };

    return (
        <div className='h-screen flex items-center justify-center relative overflow-hidden'>
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
                    <img src="p1.jpg" alt="imagen1" style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                    <img src="p2.jpg" alt="Imagen 2" style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                    <img src="p3.jpg" alt="Imagen 3" style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                    <img src="p4.jpg" alt="Imagen 4" style={{ width: '100%', height: '100%' }} />
                </div>
            </Carousel>

            {/* Componente de inicio de sesión */}
            <div className='w-full max-w-md bg-white rounded-[40px] border border-[#E6D88A] border-4 shadow-default py-10 px-16 relative z-10' style={{ fontFamily: 'cursive' }}>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Coffee Admin
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Correo electrónico</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Ingresa tu correo electrónico'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Ingresa tu Contraseña'
                        />
                    </div>

                    <div className='flex justify-center mt-6'>
                        <button
                            className={`bg-[#4A3B25] py-4 px-6 text-sm text-white rounded-[20px] border border-red focus:outline-none focus:border-green-dark`}
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
