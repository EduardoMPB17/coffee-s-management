import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
function Inicio() {
    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px'}}>
            <header>
                <WelcomeBar></WelcomeBar>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            
            <main className='col-start-2 row-span-2 overflow-hidden '>
            <div class="relative bg-gradient-to-r h-screen text-white overflow-hidden">
                <div class="absolute inset-0">
                    <img src="https://wallpapercave.com/wp/wp11960093.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
                    <div class="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 class="text-5xl font-bold leading-tight mb-4">Bienvenido a Coffee's Management</h1>
                    <p class="text-lg text-gray-300 mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium dolore quas aliquam voluptates repellendus quia nostrum hic eveniet quasi eum expedita, quidem voluptate, dolor non commodi? A, officiis nesciunt.</p>
                </div>
            </div>
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
        );
    };
export default Inicio;
