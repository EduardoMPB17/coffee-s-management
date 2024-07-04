import Product from '../models/product.model.js';

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const productDeleted = await Product.findOneAndDelete({ id });

        if (!productDeleted) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const registerProduct = async (req, res) => {
    const { id, name, description, quantity, price, category } = req.body;

    try {
        const nuevoProducto = new Product({
            id,
            name,
            description,
            quantity,
            price,
            category
        });

        const productSaved = await nuevoProducto.save();

        res.json({
            id: productSaved.id,
            name: productSaved.name,
            description: productSaved.description,
            quantity: productSaved.quantity,
            price: productSaved.price,
            category: productSaved.category
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, quantity, price, category } = req.body;

    try {
        const productUpdated = await Product.findOneAndUpdate(
            { id },
            { name, description, quantity, price, category },
            { new: true }
        );

        if (!productUpdated) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json({
            id: productUpdated.id,
            name: productUpdated.name,
            description: productUpdated.description,
            quantity: productUpdated.quantity,
            price: productUpdated.price,
            category: productUpdated.category
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Añadir esta función para obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
