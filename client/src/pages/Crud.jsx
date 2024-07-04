import React, { useState, useEffect } from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import Modal from 'react-modal';
import axios from '../api/axios';
import '../styles/Crud.css'; // Asegúrate de importar tu archivo CSS

const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%',
        maxHeight: '80%',
        overflow: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};

function Crud() {
    const [inventoryData, setInventoryData] = useState([]);
    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        description: '',
        quantity: '',
        price: '',
        category: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
        Modal.setAppElement('#root');
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/products');
            console.log('Fetched products:', response.data); 
            setInventoryData(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            alert('Error fetching products: ' + error.message);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEdit(false);
        setNewProduct({
            id: '',
            name: '',
            description: '',
            quantity: '',
            price: '',
            category: ''
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`/products/${editingProduct.id}`, newProduct);
            } else {
                await axios.post('/products', newProduct);
            }
            fetchProducts();
            closeModal();
        } catch (error) {
            console.error('Error submitting product:', error);
            alert('Error submitting product: ' + error.message);
        }
    };

    const handleEdit = (product) => {
        setNewProduct(product);
        setEditingProduct(product);
        setIsEdit(true);
        openModal();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product: ' + error.message);
        }
    };

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '240px' }}>
            <header className='col-start-2 bg-[#E6D88A] flex items-center justify-between px-4'>
                <div className="flex items-center flex-grow p-4 gap-2 bg-[#4A3B25] rounded-md focus:outline-none">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="flex-grow px-3 py-2 border border-[#E6D88A] text-[#E6D88A] placeholder-[#E6D88A] rounded-md focus:outline-none bg-[#4A3B25]"
                    />
                    <button
                        onClick={openModal}
                        className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-4 py-2 rounded-lg"
                    >
                        Agregar producto
                    </button>
                </div>
            </header>

            <nav className='row-start-1 row-span-3'> <Sidebar /> </nav>

            <main className='col-start-2 flex-grow p-4'>
                <table className="w-full rounded-t-lg overflow-hidden">
                    <thead>
                        <tr className="bg-[#E6D88A] shadow-lg">
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Código</th>
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Producto</th>
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Descripción</th>
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Cantidad</th>
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Precio</th>
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Categoría</th>
                            <th className="px-6 py-3 text-xs uppercase font-semibold text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.length > 0 ? (
                            inventoryData.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 text-xs">{item.id}</td>
                                    <td className="px-6 py-4 text-xs">{item.name}</td>
                                    <td className="px-6 py-4 text-xs">{item.description}</td>
                                    <td className="px-6 py-4 text-xs">{item.quantity}</td>
                                    <td className="px-6 py-4 text-xs">{item.price}</td>
                                    <td className="px-6 py-4 text-xs">{item.category}</td>
                                    <td className="px-6 py-4 text-xs">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-3 py-1 rounded-lg"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-3 py-1 rounded-lg"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-4 text-center text-xs">No hay productos</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>

            <div className='col-start-2'><Footer /></div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel={isEdit ? "Editar Producto" : "Agregar Producto"}
                style={customModalStyles}
            >
                <h2>{isEdit ? "Editar Producto" : "Agregar Producto"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Código:</label>
                        <input
                            type="text"
                            name="id"
                            value={newProduct.id}
                            onChange={handleChange}
                            className="custom-input"
                            disabled={isEdit}
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={newProduct.name}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            name="description"
                            value={newProduct.description}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <div>
                        <label>Cantidad:</label>
                        <input
                            type="text"
                            name="quantity"
                            value={newProduct.quantity}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <div>
                        <label>Precio:</label>
                        <input
                            type="text"
                            name="price"
                            value={newProduct.price}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <div>
                        <label>Categoría:</label>
                        <input
                            type="text"
                            name="category"
                            value={newProduct.category}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <button type="submit" className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-3 py-1 rounded-lg">
                        {isEdit ? "Guardar cambios" : "Agregar"}
                    </button>
                    <button type="button" onClick={closeModal} className="bg-[#E6D88A] hover:bg-[#e0cd63] text-[#4A3B25] px-3 py-1 rounded-lg">
                        Cancelar
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default Crud;
