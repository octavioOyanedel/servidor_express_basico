const { Router } = require('express');
const router = Router();

/**
 * Ruta raiz
 */
router.get('/', (req, res) => {
    res.json({
        "Servidor": "Básico",
        "Función": "Pruebas"
    });
});

module.exports = router;