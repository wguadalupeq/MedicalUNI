import { json } from 'express';
import { Users } from '../../database/modelo/index.js'

const create = async (req, res) => {
    try {
        const { name, lastName, dni, phone, email, password } = req.body

        await Users.create({
            name: name,
            lastName: lastName,
            dni: dni,
            phone: phone,
            email: email,
            password: password
        });

        res.json({ create: "Success", email: email });
    } catch (error) {
        res.json({ create: "failed", error: error });
    }
}

const update = async (req, res) => {
    try {
        const body = req.body

        const findNull = (user, body) => {
            const {name, lastName, dni, phone, email, password} = body
            return {
                name: name ? name : user.name,
                lastName: lastName ? lastName : user.lastName,
                dni: dni ? dni : user.dni,
                phone: phone ? phone : user.phone,
                email: email ? email : user.email,
                password: password ? password : user.password
            }
        }
        const user = await Users.findOne({ email:body.email })
        const { name, lastName, dni, phone, email, password } = findNull(user,body)

        await Users.updateOne(
            { _id: user._id },
            [
                {
                    $set: {
                        name: name,
                        lastName: lastName,
                        dni: dni,
                        phone: phone,
                        email: email,
                        password: password
                    }
                }
            ]
        )


        res.json({ update: "Success", email: email });
    } catch (error) {
        console.log("error: " + error)
        res.json({ update: "failed", error: error });
    }
};

const deleted = async (req, res) => {
    try {
        const { email } = req.body
        await Users.remove({ email })
        res.json({ deleted: "Success", user: email });
    } catch (error) {
        res.json({ deleted: "failed", error: error });
    }
};

const find = async (req, res) => {

    try {
        const { email, password } = req.body
        const users = await Users.find({ email, password });
        const { id } = users[0]
        res.json({ find: "Success", id: id });
    } catch (error) {
        res.json({ find: "failed", error: error });
    }
}

const findAll = async (req, res) => {
    try {
        const filter = {}
        const user = await Users.find(filter);
        res.json({ findAll: "Success", user: user });
    } catch (error) {
        res.json({ findAll: "failed", error: error });
    }
};

const userID = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Users.findOne({ id })
        const {name,lastName,dni,phone,email} = user
        const aux = {name,lastName,dni,phone,email}
        res.json({ findID: "Success", user: aux });
    } catch (error) {
        res.json({ findID: "failed", error: error });
    }
};

export { create, update, deleted, find, findAll, userID };
