/**
 * Dependencias
 */
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/router');
const app = express();

/**
 * Configuraciones
 */
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

/**
 * Middlewares
 */
app.use(morgan('combined'));
app.use(express.json());

/**
 * Rutas
 */
app.use(routes);

/**
 * Iniciar servidor
 */
app.listen(port, () => {
    console.log(`Servidor OK puerto: ${port}`);
});