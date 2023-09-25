const Tipo = require('../models/tipo')
const { request, response } = require('express')


const createTipo = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, descripcion} = req.body
    try {
        const tipoDB = await Tipo.findOne({ nombre })

        if(tipoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }
    
        const tipo = new Tipo(datos)
    
        await tipo.save()
    
        return res.status(201).json(tipo)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = {
    createTipo
}