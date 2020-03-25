var mongoose = require('mongoose');

// Setup schema

var autoSchema = mongoose.Schema({
    id: {
        type: Number
    },
    marca: {
        type: String,
        required: true
    },
    submarca: {
        type: String,
        required: true
    },
    modelos: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

// Export Auto Model

var Auto = module.exports = mongoose.model('auto', autoSchema)

module.exports.get = function (callback, limit) {
    Auto.find(callback).limit(limit);
}