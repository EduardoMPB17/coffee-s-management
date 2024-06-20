import { Router } from 'express';
import { upload, uploadFile, getFiles, deleteFile, downloadFile} from '../controllers/file.controller.js';

const router = Router();

router.post('/upload', upload.single('file'), uploadFile);
router.get('/list', getFiles);

router.delete('/delete/:filename', deleteFile);

router.get('/download/:filename', downloadFile); 

export default router;