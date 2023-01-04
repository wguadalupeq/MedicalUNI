import mongoose from 'mongoose';
const { Schema } = mongoose;

const citeSchema = new Schema({
    userID: { type: String, required: true },
    especialidad: { type: String },
    genero: { type: Boolean },
    date: {type: Number}
},{
    timestamps:true
})

export { citeSchema }