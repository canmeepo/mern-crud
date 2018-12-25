const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8888;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions))

app.use(require('./server/routes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})