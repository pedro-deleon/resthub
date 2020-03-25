var mongoose = require('mongoose');

// Setup schema

var autoSchema = mongoose.Schema({
    id: {
        type: Number
    },
    marca: {
        type: String
    },
    submarca: {
        type: String
    },
    modelos: {
        type: Number
    },
    descripcion: {
        type: String
    }
});

// Export Auto Model

var Auto = module.exports = mongoose.model('auto', autoSchema)

module.exports.get = function (callback, limit) {
    Auto.find(callback).limit(limit);
}