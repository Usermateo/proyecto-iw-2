const { Schema, model } = require('mongoose')

const ProductoraSchema = Schema({
    nombrePro: {
        type: String,
        required: [true, 'Nombre productora requerido'],
        minlength: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    slogan: {
        type: String
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Productora', ProductoraSchema)