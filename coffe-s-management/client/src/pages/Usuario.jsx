import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
function Usuario() {

    const userData = {
        nombre: "John Doe",
        correo: "john@example.com",
        cargo: "Empleado",
        telefono: "123-456-7890"
    };

    return (

        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '240px'}}>

            <header>
                <WelcomeBar></WelcomeBar>
            </header>

            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>

            <main className='col-start-2 flex justify-center items-center'>
                <div className='bg-gray-200 p-6 rounded-lg shadow-md w-1/2'>
                    <h2 className='text-lg font-semibold mb-4 text-center'>Datos del Usuario</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border border-gray-400 p-2 rounded-md">
                            <p><strong>Nombre:</strong> Nombre del Usuario</p>
                        </div>
                        <div className="border border-gray-400 p-2 rounded-md">
                            <p><strong>Correo:</strong> correo@example.com</p>
                        </div>
                        <div className="border border-gray-400 p-2 rounded-md">
                            <p><strong>Cargo:</strong> Admin o empleado</p>
                        </div>
                        <div className="border border-gray-400 p-2 rounded-md">
                            <p><strong>Teléfono:</strong> 123456789</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}

export default Usuario;