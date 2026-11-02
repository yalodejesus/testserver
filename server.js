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
// Ruta POST para recibir un número, multiplicarlo por 2 y devolverlo
app.post('/api/multiplicar', (req, res) => {
    // Extraemos el número que viene en el cuerpo de la petición
    const numeroRecibido = req.body.numero;

    // Verificamos que realmente sea un número válido
    if (typeof numeroRecibido !== 'number') {
        return res.status(400).json({ error: 'El campo "numero" debe ser un valor numérico' });
    }

    // Realizamos la operación matemática
    const resultado = numeroRecibido * 2;

    // Respondemos con el resultado en formato JSON
    res.json({
        original: numeroRecibido,
        multiplicadoPorDos: resultado
    });
});
