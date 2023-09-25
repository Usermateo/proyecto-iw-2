const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    sipnosis: {
        type: String
    },
    imagenUrl: {
        type: String
    },
    url: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    añoEstreno: {
        type: Date,
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
})

module.exports = model('Media', MediaSchema)