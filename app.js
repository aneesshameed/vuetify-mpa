const express = require('express');
const app = express();

app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));

/*BODY PARSER*/
/***************************************/
const bodyParser = require("body-parser");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
/***************************************/

const contactRouter = require('./api/routes/contact');
app.use('/api/contact', contactRouter);

const pageRouter = require('./api/routes/page');
app.use('/', pageRouter);

app.listen(8080, () => {
    console.log(`Example app listening on port 8080!`)
})
