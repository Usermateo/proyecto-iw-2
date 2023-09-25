const Director = require('../models/director')
const { request, response } = require('express')

/**
 * Crear Director
 */
const createDirector = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombreDir } = req.body
    try {
        const directorDB = await Director.findOne({ nombreDir })

        if(directorDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombreDir
        }
    
        const director = new Director(datos)
    
        await director.save()
    
        return res.status(201).json(director)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = {
    createDirector
}