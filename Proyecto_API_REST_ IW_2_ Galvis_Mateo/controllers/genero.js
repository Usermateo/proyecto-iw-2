const Genero = require('../models/genero')
const { request, response } = require('express')

/**
 * Crear genero
 */
const createGenero = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombre, descripcion} = req.body
    try {
        const generoDB = await Genero.findOne({ nombre })

        if(generoDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }
    
        const genero = new Genero(datos)
    
        await genero.save()
    
        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

/**
 * consultar todos los géneros
 */

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */
const updateGenero = async (req = request, res = response) => {
    const { nombre } = req.params; 
    const { descripcion } = req.body; 

    try {

        const generoDB = await Genero.findOne({ nombre });

        if (!generoDB) {
            return res.status(404).json({ mensaje: 'Género no encontrado' });
        }

        generoDB.descripcion = descripcion;

        await generoDB.save();

        return res.status(200).json(generoDB);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

/**
 * Borrar un género
 */
module.exports = {
    createGenero,
    updateGenero
}