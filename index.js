const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 8000;

//middleware
app.use(express.json());

//routes
routerApi(app);

//listener
app.listen(port, () => {
    console.log('Running on 8000');
});