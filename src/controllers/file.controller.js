import multer from 'multer';
import storage from '../libs/gridFsStorage.js';
import stream from 'stream';
import { gfs, conn } from '../db.js';

import mongoose from "mongoose";

const upload = multer({ storage });

const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('Archivo no subido');
    }
    res.json({ file: req.file });
};

const getFiles = async (req, res) => {
    const files = await gfs.files.find().toArray();

    if (!files || files.length === 0) {
        return res.status(404).json({
            message: 'Archivos no encontrado',
        });
    }

    res.json(files);
};

const deleteFile = async (req, res) => {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    console.log("Archivo encontrado: ", file);

    const gsfb = new mongoose.mongo.GridFSBucket(conn.connection.db, { bucketName: 'uploads' });
    gsfb.delete(file._id);

    const getFiles = await gfs.files.find().toArray();
    res.status(200).json(getFiles);
};


const downloadFile = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });

        if (!file) {
            return res.status(404).json({
                message: 'Archivo no encontrado'
            });
        }

        const gsfb = new mongoose.mongo.GridFSBucket(conn.connection.db, {
            bucketName: 'uploads'
        });

        const downloadStream = gsfb.openDownloadStream(file._id);
        const passThrough = new stream.PassThrough();

        res.set('Content-Disposition', `attachment; filename="${file.filename}"`);
        res.set('Content-Type', file.contentType);

        downloadStream.pipe(passThrough);
        passThrough.pipe(res);
    } catch (error) {
        console.error('Error al descargar archivo:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { upload, uploadFile, getFiles, deleteFile, downloadFile };