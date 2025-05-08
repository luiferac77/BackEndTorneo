import mongoose from "mongoose";

const ClubesSchema = new mongoose.Schema({
    nombre: {type: String, required: true}, 
    apodo: {type: String}, 
    logo_url: {type:String, required: true}
});

const ClubesModel = mongoose.model('ClubesModel', ClubesSchema, 'club');

export default ClubesModel;