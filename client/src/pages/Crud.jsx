import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';

function Crud() {

    // Simulación de datos de inventario
    const inventoryData = [
        { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', quantity: 10, price: 100, category: 'Categoría del producto 1' },
        { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', quantity: 10, price: 100, category: 'Categoría del producto 2' },
        { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', quantity: 10, price: 100, category: 'Categoría del producto 3' },
        { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', quantity: 10, price: 100, category: 'Categoría del producto 4' },
        { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', quantity: 10, price: 100, category: 'Categoría del producto 5' },
        { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', quantity: 10, price: 100, category: 'Categoría del producto 6' },
        { id: 7, name: 'Producto 7', description: 'Descripción del producto 7', quantity: 10, price: 100, category: 'Categoría del producto 7' },
        { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', quantity: 10, price: 100, category: 'Categoría del producto 8' },
        { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', quantity: 10, price: 100, category: 'Categoría del producto 8' },
        { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', quantity: 10, price: 100, category: 'Categoría del producto 8' },
        { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', quantity: 10, price: 100, category: 'Categoría del producto 8' },
        { id: 9, name: 'Producto 9', description: 'Descripción del producto 9', quantity: 10, price: 100, category: 'Categoría del producto 9' },
        { id: 10, name: 'Producto 10', description: 'Descripción del producto 10', quantity: 10, price: 100, category: 'Categoría del producto 10' },
        { id: 11, name: 'Producto 11', description: 'Descripción del producto 11', quantity: 11, price: 100, category: 'Categoría del producto 11' }, 
        { id: 12, name: 'Producto 12', description: 'Descripción del producto 12', quantity: 12, price: 100, category: 'Categoría del producto 12' } 
    ];

    return (
        <div className='grid grid-cols-2 h-[100vh]  ' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '240px' }}>

            <header className='col-start-2 bg-[#E6D88A] flex items-center justify-between px-4'>
                <div className="flex items-center flex-grow p-4 gap-2 bg-[#4A3B25] rounded-md focus:outline-none">

                    <input type="text" placeholder="Buscar..." className="flex-grow px-3 py-2 border border-[#E6D88A] text-[#E6D88A] placeholder-[#E6D88A] rounded-md focus:outline-none bg-[#4A3B25]" />

                    <button className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-4 py-2 rounded-lg">Agregar producto</button>
                    <button className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-4 py-2 rounded-lg">Modificar producto</button>
                    <button className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-4 py-2 rounded-lg">Eliminar producto</button>
                </div>
            </header>

            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>

            <main className='col-start-2 flex-grow p-4'>
                <table className="w-full rounded-t-lg overflow-hidden  ">
                    <thead>
                        <tr className="bg-[#E6D88A] shadow-lg">
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Código</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Producto</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Descripción</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Cantidad</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Precio</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((item) => (
                            <tr key={item.id} >
                                <td className="border-t-0 px-6 align-middle  text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.id}</td>
                                <td className="border-t-0 px-6 align-middle  text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.name}</td>
                                <td className="border-t-0 px-6 align-middle  text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.description}</td>
                                <td className="border-t-0 px-6 align-middle  text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.quantity}</td>
                                <td className="border-t-0 px-6 align-middle  text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.price}</td>
                                <td className="border-t-0 px-6 align-middle  text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            <div className='col-start-2'><Footer/></div>
        </div>
    );
}

export default Crud;