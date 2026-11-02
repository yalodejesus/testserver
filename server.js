const express = require('express');
const app = express();

app.use(express.json());

// Ruta GET de prueba
app.get('/', (req, res) => {
    res.send('¡El servidor backend está activo en Render!');
});

// Ruta POST para simular recepción de datos (como un webhook)
app.post('/api/test', (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos:', datos);
    res.json({ status: 'success', recibido: datos });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});