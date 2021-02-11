const express = require('express');
const morgan = require('morgan');
const path  = require('path');
const app = express();

const {mongoose} = require('./database');


//  setting
app.set('port', process.env.PORT || 3000)
//  Midleware son funciones que se ejecutan antes de llegar a las rutas
app.use(morgan('dev'));
app.use(express.json());



//  routes

app.use('/api/tarea', require('./rutas/tarea.rutas'));
// static
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () =>{
    console.log(`Server en port ${app.get('port')}`);
})