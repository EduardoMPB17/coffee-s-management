const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
    const userData = {
        nombre: "John Doe",
        correo: "john@example.com",
        cargo: "Empleado",
        telefono: "123-456-7890"
    };
    res.json(userData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
