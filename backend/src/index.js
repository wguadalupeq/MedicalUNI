import express, { json } from 'express';
import morgan from 'morgan';
import config from './utils/config.js';
import { backend, home, start, user, cite } from './network/index.js';
import mongoDB from './database/index.js'

const app = express();



// Settings
app.set('json spaces', 2)


// middlewares
app.use(morgan('dev'));
app.use(json());
//app.use(express.urlencoded({extends:false}))


// routes
app.use('/', backend);
app.use('/api/', home);
app.use('/api/cites', cite);
app.use('/api/users', user);
app.use('/api/start', start);

// Port
app.listen(config.port, () => {
    console.log('Server Established' + "\tPort: " + config.port)
});

// DB
mongoDB.connect();