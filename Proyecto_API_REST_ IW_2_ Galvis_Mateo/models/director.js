const { Schema, model } = require('mongoose')

const DirectorSchema = Schema({
    nombreDir: {
        type: String,
        required: [true, 'Nombre director requerido'],
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
    }
})

module.exports = model('Director', DirectorSchema)