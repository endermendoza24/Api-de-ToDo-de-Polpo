const mongoose  = require('mongoose');
const URI = 'mongodb://localhost/todo-polpo';
mongoose.connect(URI)
    .then(db => console.log('La base de datos esta conectada correctamente'))
    .catch(err =>console.log(err));

    module.exports = mongoose;