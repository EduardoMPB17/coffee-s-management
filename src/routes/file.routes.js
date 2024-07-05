import { Router } from 'express';
import { upload, uploadFile, getFiles, deleteFile, downloadFile } from '../controllers/file.controller.js';

const router = Router();

router.post('/upload', upload.single('file'), uploadFile); // Ruta para subir un archivo
router.get('/list', getFiles); // Ruta para obtener la lista de archivos
router.delete('/delete/:filename', deleteFile); // Ruta para eliminar un archivo
router.get('/download/:filename', downloadFile); // Ruta para descargar un archivo

export default router;