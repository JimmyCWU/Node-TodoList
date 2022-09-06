const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const indexRouter = require('./routes/index')
const todoRouter = require('./routes/todos')
//掛載ejs
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
//bootstrap
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')))
//routes
app.use('/home', indexRouter);
app.use('/api', todoRouter);

app.listen(PORT, ()=>{
    console.log("server is listening on port " + PORT);
});