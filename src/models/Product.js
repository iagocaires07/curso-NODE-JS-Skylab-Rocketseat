const mongoose = require('mongoose');
const mongossePaginate = require('mongoose-paginate');

// CRIANDO UM MODELO DE SCHEMA E DEFININDO SEUS CAMPOS
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:  true,
    },

    description: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// DEFININDO A UTILIZAÇÃO DE PAGINAÇÃO
ProductSchema.plugin(mongossePaginate);

mongoose.model('Product', ProductSchema);