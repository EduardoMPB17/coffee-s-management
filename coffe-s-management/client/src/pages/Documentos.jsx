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
            <main className='col-start-2 flex-grow p-4'>
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Nombre de documento</th>
                            <th className="border border-gray-300 p-2">Fecha de subida</th>
                            <th className="border border-gray-300 p-2">Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryDoc.map((item) => (
                            <tr key={item.id}>
                                <td className="border border-gray-300 p-2">{item.name}</td>
                                <td className="border border-gray-300 p-2">{item.dateup}</td>
                                <td className="border border-gray-300 p-2">{item.category}</td>
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