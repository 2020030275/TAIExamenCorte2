const express = require('express')
const router = express.Router()
const ejs = require('ejs');
const bodyparser = require('body-parser')

router.get('/', (req, res) => {
    const valores = {
        nombre: req.query.nombre,
        tipoConsumo: req.query.tipoConsumo,
        kwConsumidos: req.query.kwConsumidos,

    }
    
    res.render('index.html', valores)
})

router.get('/index', (req, res) => {

    const valores = {
        nombre: req.query.nombre,
        tipoConsumo: req.query.tipoConsumo,
        kwConsumidos: req.query.kwConsumidos,

    }
    
    res.render('index.html', valores)
})

router.post('/index', (req, res) => {

    const valores = {
        nombre: req.body.nombre,
        tipoConsumo: req.body.tipoConsumo,
        kwConsumidos: req.body.kwConsumidos,

    }
    
    res.render('index.html', valores)
})


router.get('/detalles', (req, res) => {

    const valores = {
        nombre: req.query.nombre,
        tipoConsumo: req.query.tipoConsumo,
        kwConsumidos: req.query.kwConsumidos,

    }
    
    res.render('detalles.html', valores)
})

router.post('/detalles', (req, res) => {

    const valores = {
        nombre: req.body.nombre,
        tipoConsumo: req.body.tipoConsumo,
        kwConsumidos: req.body.kwConsumidos,

    }
    
    res.render('detalles.html', valores)
})



module.exports = router