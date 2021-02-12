express = require('express');
const router = express.Router();

const Task = require('../modelos/tareas.js');



router.get('/', async(req, res ) =>{

    const task = await Task.find();
    console.log(task);
    res.json(task);
});

router.post('/', async(req, res) =>{
    // console.log(req.body); //  el navegador envia datos y se reciben através de eeste metodo
    const {titulo, autor, descripcion, prioridad, estado} = req.body;
    const task = new Task({titulo, autor, descripcion, prioridad, estado}); //  esto crea una nueva tarea
    console.log(task); 
    await task.save(); //  esto guarda los datos en la bd, pero de manera asíncrona
    res.json({status:'Tarea guardada'});
});

router.put('/:id', async(req, res) =>{
    const {title, descripcion} = req.body;
    const newTask = {titulo, autor, descripcion, prioridad, estado};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({status:'Tarea actualizada'});
}); 


router.delete('/:id', async(req, res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'tarea eliminada...'});
});




module.exports = router;