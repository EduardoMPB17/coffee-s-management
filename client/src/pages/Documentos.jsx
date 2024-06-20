import React, { useState, useEffect } from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import axios from '../api/axios';

function Documents() {
    const [file, setFile] = useState(null);
    const [filesList, setFilesList] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
            fetchFiles();
            e.target.reset();
        } catch (err) {
            console.error(err);
        }
    };

    const fetchFiles = async () => {
        try {
            const res = await axios.get('/files/list');
            console.log('Files fetched:', res.data);
            setFilesList(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (filename) => {
        try {
            await axios.delete(`/files/delete/${filename}`);
            //console.log(res.data);
            fetchFiles();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '240px' }}>
            <header className='col-start-2 bg-[#E6D88A] content-center px-40'>
                <form className='flex place-content-between items-center bg-[#4A3B25] rounded-md p-4' onSubmit={handleSubmit}>
                    <input className='bg-[#E6D88A]' type="file" onChange={handleFileChange}/>
                    <button type="submit" className='bg-[#E6D88A] text-black rounded p-2'>Subir</button>
                </form>
            </header>

            <nav className='row-start-1 row-span-3'><Sidebar /></nav>

            <main className='col-start-2 flex-group p-4'>
                <table className="w-full rounded-t-lg overflow-hidden">
                    <thead>
                        <tr className="bg-[#E6D88A] shadow-lg">
                            <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">Nombre del Archivo</th>
                            <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">Tamaño</th>
                            <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">Tipo de archivo</th>
                            <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">Fecha de Subida</th>
                            <th className="px-6 text-blueGray-500 align-middle py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filesList.map((file) => (
                            <tr key={file._id}>
                                <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700">{file.filename}</td>
                                <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700">{(file.length / 1024).toFixed(2)} KB</td>
                                <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700">{file.contentType}</td>
                                <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700">{new Date(file.uploadDate).toLocaleString()}</td>
                                <td className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700"><button onClick={() => handleDelete(file.filename)} className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"> Eliminar </button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <div className='col-start-2'><Footer /></div>
        </div>
    );
}

export default Documents;