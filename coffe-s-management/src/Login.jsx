import React from 'react';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='h-screen flex'>
            <div className='w-full max-w-md m-auto bg-white rounded-[40px] border border-[#E6D88A] border-4 shadow-default py-10 px-16' style={{boxSizing: 'border-box'}}> {/* Agrega boxSizing: 'border-box' */}
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Coffee Admin
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Correo electronico</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Ingresa tu correo electronico'
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

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-[#E6D88A]  py-4 px-6 text-sm text-white rounded-[20px] border border-red focus:outline-none focus:border-green-dark`}
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
