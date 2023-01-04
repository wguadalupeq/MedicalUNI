import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    uuid: { type: String },
    name: { type: String },
    lastName: { type: String },
    dni: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true }
},{
    timestamps:true
})

export { userSchema }