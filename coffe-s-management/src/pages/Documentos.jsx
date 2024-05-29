import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';

function Documents() {

    // Simulación de datos de Documentos
    const inventoryDoc = [
        { name: 'Documento 1', dateup: '11/11/1111', category: 'Categoría 1' },
        { name: 'Documento 2', dateup: '11/11/1111', category: 'Categoría 2' },
        { name: 'Documento 3', dateup: '11/11/1111', category: 'Categoría 3' },
        { name: 'Documento 4', dateup: '11/11/1111', category: 'Categoría 4' },
        { name: 'Documento 5', dateup: '11/11/1111', category: 'Categoría 5' }
    ];

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '240px'}}>
            <header className='col-start-2 bg-[#E6D88A] px-4'>
                <h1 className='text-xl font-bold'>¡Documentos!</h1>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            <main className='col-start-2 flex-grow p-4 '>
                <table className="w-full rounded-t-lg overflow-hidden">
                    <thead>
                        <tr className="bg-[#E6D88A] shadow-lg">
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Nombre de documento</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Fecha de subida</th>
                            <th className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryDoc.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">{item.name}</td>
                                <td className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">{item.dateup}</td>
                                <td className="px-6  text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}

export default Documents;