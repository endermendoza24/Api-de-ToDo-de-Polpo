const mongoose  = require('mongoose');
const URI = 'mongodb://localhost/todo-polpo';
mongoose.connect(URI)
    .then(db => console.log('Database esta conectada'))
    .catch(err =>console.log(err));

    module.exports = mongoose;