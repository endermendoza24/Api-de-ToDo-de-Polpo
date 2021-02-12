const mongoose  = require('mongoose');
const Direccion = 'mongodb://localhost/todo-polpo';
mongoose.connect(Direccion)
    .then(db => console.log('La base de datos esta conectada correctamente'))
    .catch(err =>console.log(err));

    module.exports = mongoose;