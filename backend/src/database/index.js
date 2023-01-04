import { mongoose } from 'mongoose';
import config from '../utils/config.js'
const { connectionData } = config

const url = "mongodb+srv://" + connectionData.user + ":" + connectionData.password + "@" 
+ connectionData.host + "/" + connectionData.database


const connect = async () => {
    await mongoose.connect(url).then(
        () =>
            console.log("base de datos establesida")
    );
}

const disconnect = async () => {
    await mongoose.connection.close()
}

export default { connect, disconnect }