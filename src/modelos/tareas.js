const mongoose = require('mongoose');
const {Schema} = mongoose; //  esto permite tener el esquema de los datos, o sea, si una tarea tiene titulo, fecha etc...


const tareaEsquema = new Schema({
    title : {type: String, required:true},
    descripcion : {type: String, required=true}
})


module.exports = mongoose.model('Task', tareaEsquema);