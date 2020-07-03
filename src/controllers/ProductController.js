const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // // MÉTODO QUE RETORNA OS ITENS CRIADOS 
    async index(require, response){
        const {page = 1} = require.query;
        const products = await Product.paginate({}, {page, limit: 10}); //PAGINAÇÃO QUE DEFINE QUANTOS ITENS É EXIBIDO

        return response.json(products);
    },

    // MÉTODO QUE CRIA OS ITENS 
    async store(request, response){
        const product = await Product.create(request.body);

        return response.json(product);
    },

    // MÉTODOS QUE LISTA ITENS EXPECÍFICOS A PARTIR DO SUE ID
    async show(request, response){
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },

    // MÉTODO QUE FAZ ATUALIZAÇÕES NOS REGISTROS 
    async update(request, response){
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true});
        
        return response.json(product);
    }, 

    // MÉTODO QUE DELETA OS ITENS REGISTRADOS A PARTIR DO SEU ID
    async destroy(request, response){
        await Product.findByIdAndRemove(request.params.id);

        return response.send();
    }
}