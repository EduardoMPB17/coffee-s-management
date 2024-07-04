import express from 'express';
import { registerProduct, deleteProduct, updateProduct, getProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/products', registerProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);
router.get('/products', getProducts); // Añadir esta línea

export default router;
