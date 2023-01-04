import { json } from 'express';
import { Cites } from '../../database/modelo/index.js'

const create = async (req, res) => {
    try {
        const { userID, especialidad, genero, date } = req.body

        await Cites.create({
            userID: userID,
            especialidad: especialidad,
            genero: genero,
            date: date
        });

        res.json({ create: "Success", userID: userID, especialidad: especialidad });
    } catch (error) {
        res.json({ create: "failed", error: error });
    }
}


const update = async (req, res) => {
    try {
        const body = req.body

        const findNull = (cite, body) => {
            const { _id, userID, especialidad, genero, date } = body
            return {
                id: _id ? _id : cite._id,
                userID: userID ? userID : cite.userID,
                especialidad: especialidad ? especialidad : cite.especialidad,
                genero: genero ? genero : cite.genero,
                date: date ? date : cite.date
            }
        }

        const cite = await Cites.findOne({ userID: body.userID })
        const { id, userID, especialidad, genero, date } = findNull(cite, body)

        await Cites.updateOne(
            { _id: id },
            [
                {
                    $set: {
                        userID: userID,
                        especialidad: especialidad,
                        genero: genero,
                        date: date
                    }
                }
            ]
        )
        res.json({ update: "Success", userID: userID });
    } catch (error) {
        console.log("error: " + error)
        res.json({ update: "failed", error: error });
    }
};








const deleted = async (req, res) => {
    try {
        const { id } = req.body
        await Cites.remove({ id })
        res.json({ deleted: "Success", user: userID });
    } catch (error) {
        res.json({ deleted: "failed", error: error });
    }
};

const deletedUserID = async (req, res) => {
    try {
        const { userID } = req.body
        await Cites.remove({ userID: userID })
        res.json({ deleted: "Success", user: userID });
    } catch (error) {
        res.json({ deleted: "failed", error: error });
    }
};

const find = async (req, res) => {
    try {
        const { id } = req.body
        const cite = await Cites.findOne({ id });
        res.json({ find: "Success", cite: cite });
    } catch (error) {
        res.json({ find: "failed", error: error });
    }
}

const findAllUser = async (req, res) => {
    try {
        const { userID } = req.body
        const cites = await Cites.find({ userID });
        res.json({ find: "Success", cite: cites });
    } catch (error) {
        res.json({ find: "failed", error: error });
    }
}

const findAll = async (req, res) => {
    try {
        const filter = {}
        const cites = await Cites.find(filter);
        res.json({ findAll: "Success", cites: cites });
    } catch (error) {
        res.json({ findAll: "failed", error: error });
    }
};

const citeID = async (req, res) => {
    try {
        const citeID = req.params.citeID;
        const cite = await Cites.findOne({ citeID })
        res.json({ findID: "Success", cite: cite });
    } catch (error) {
        res.json({ findID: "failed", error: error });
    }
};

export { create, update, deleted, deletedUserID, find, findAllUser, findAll, citeID };
