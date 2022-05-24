const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middleware/error.handler.js');

const app = express();
const port = 8000;

//middleware
app.use(express.json());

//routes
routerApi(app);

//error middlewares
app.use(logErrors);
app.use(errorHandler);

//listener
app.listen(port, () => {
    console.log('Running on 8000');
});