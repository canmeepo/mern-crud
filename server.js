const express = require('express');

const app = express();
const PORT = process.env.PORT || 8888;

app.use(require('./app/routes'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})