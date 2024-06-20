import multer from 'multer';
import storage from '../libs/gridFsStorage.js';
import { gfs, conn } from '../db.js';

import mongoose from "mongoose";

const upload = multer({ storage });

const uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.json({ file: req.file });
};

const getFiles = async (req, res) => {
    const files = await gfs.files.find().toArray();

    if (!files || files.length === 0) {
        return res.status(404).json({
            message: 'No files found',
        });
    }

    res.json(files);
};

const deleteFile = async (req, res) => {
    const file = await gfs.files.findOne({ filename: req.params.id });
    const gsfb = new mongoose.mongo.GridFSBucket(conn.connection.db, { bucketName: 'uploads' });
    gsfb.delete(file._id, function (err, gridStore) {
        if (err) {
            res.status(404).send('no file found')
        }
        res.status(200).send('deleted successfully')
    });
};

export { upload, uploadFile, getFiles, deleteFile };