import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb+srv://Eduardo:123@cluster0.xb1udix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    file: (req, file) => {
        return {
            bucketName: 'uploads',
            filename: `${file.originalname}`
        };
    }
});

export default storage;