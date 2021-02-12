const mongoose = require('mongoose');
const {Schema} = mongoose; //  esto permite tener el esquema de los datos, o sea, si una tarea tiene titulo, fecha etc...


const tareaEsquema = new Schema({ //  esquema de la base de datos
    titulo : {type: String, required:true},
    autor : {type: String, required:true},
    descripcion : {type: String, required:true},
    prioridad : {type: String, required:true},
   estado : {type: Boolean, required:true}

    
})


module.exports = mongoose.model('Tarea', tareaEsquema);