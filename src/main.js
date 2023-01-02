require('dotenv').config();
const express = require('express');
const actuator = require('express-actuator')

const main = async () => {
    const app = express();
    app.use(actuator())

    app.get('/hello', (req, res) => {
        res.send('Hello World!');
    });
    
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server started on port ${process.env.APP_PORT}`);
    });
}

main();