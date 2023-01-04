import schemas from '../../schema/index.js'
import mongoose from 'mongoose';
const { model } = mongoose;

const Users = model('Users', schemas.userSchema);
const Cites = model('citeSchema', schemas.citeSchema);
// const Specialty = model('Specialty', schemas.specialtySchema);

export { 
    Users, 
    Cites, 
    // Specialty 
}