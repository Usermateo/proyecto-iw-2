const Productora = require('../models/productora')
const { request, response } = require('express')


const createProductora = async (req = request, res = response) => {// endpoint
    //console.log(req.body)
    const { nombrePro, slogan, descripcion} = req.body
    try {
        const ProductoraDB = await Productora.findOne({ nombrePro })

        if(ProductoraDB) {
            return res.status(400).json({mjs: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombrePro,
            slogan,
            descripcion
        }
    
        const productora = new Productora(datos)
    
        await productora.save()
    
        return res.status(201).json(productora)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = {
    createProductora
}