express = require('express');
const router = express.Router();

const Task = require('../modelos/tareas.js');



router.get('/', async(req, res ) =>{

    const task = await Task.find();
    console.log(task);
    res.json('estupida y sensual programacion');
});

router.post('/', async(req, res) =>{
    // console.log(req.body); //  el navegador envia datos y se reciben através de eeste metodo
    const {title, descripcion} = req.body;
    const task = new Task({title, descripcion}); //  esto crea una nueva tarea
    console.log(task); 
    await task.save(); //  estoa guarda los datos en la bd, pero de manera asíncrona
    res.json({status:'task saved'});
})





module.exports = router;