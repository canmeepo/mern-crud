require('dotenv').config({path: './variables.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8888;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('./server/routes'))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('db conntected'))
    .catch(error => console.log(error));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})