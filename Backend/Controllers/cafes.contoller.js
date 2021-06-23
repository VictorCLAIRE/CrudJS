const mongoose = require('mongoose');

let path = require('path');

const Cafes = mongoose.model('cafes');

exports.baseRoute = async (request, response) => {
    response.sendFile(path.resolve(__dirname + "../../../Frontend/index.html"))
}

exports.getCafes = async (request, response) => {
    const cafes = await Cafes.find();
    response.json(cafes)
}

exports.createCafes = async (request, response) => {
    //MongoDb et mongoose porose la method save()
    await new Cafes(request.body).save((err, data) =>{
        if(err){
            response.status(500).json({
                message: 'Une erreur est survenue lors de la creation du nouveau produit cafe'
            });
        }else{
            response.status(200).json({
                message: "Votre nouveau café a été creer",
                data
            })
        }
    })
}



