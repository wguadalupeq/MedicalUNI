import mongoose from 'mongoose';
const { Schema } = mongoose;

const specialtySchema = new Schema({
    code: { type: String, required: true },
    name: { type: String, required: true }
},{
        timestamps:true
    })

export { specialtySchema }