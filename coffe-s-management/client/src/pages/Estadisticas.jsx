import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';

function Estadistics() {
    const handleClick1 = () => {
    
    };

    const handleClick2 = () => {
    
    };

    const handleClick3 = () => {
    
    };

    const handleClick4 = () => {
    
    };

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '240px'}}>
            <header className='col-start-2 bg-[#E6D88A] px-4'>
                <h1 className='text-xl font-bold'>¡Estadísticas!</h1>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            <main className='col-start-2 flex justify-center items-center relative'>
                <img src='/img/p1.jpg' alt='background' className='absolute inset-0 w-full h-full object-cover object-center' />
                <div className="grid grid-cols-2 gap-4 relative">
                    <button className="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c]" onClick={handleClick1}>Ventas mensuales</button>
                    <button className="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c]" onClick={handleClick2}>Productos más vendidos</button>
                    <button className="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c]" onClick={handleClick3}>Crecimiento</button>
                    <button className="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c]" onClick={handleClick4}>Gráficos, etc</button>
                </div>
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}

export default Estadistics;