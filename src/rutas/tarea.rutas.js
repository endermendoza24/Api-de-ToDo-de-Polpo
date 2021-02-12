express = require('express');
const router = express.Router();

const Tareas = require('../modelos/tareas.js');



router.get('/', async(req, res ) =>{

    const tarea = await Tareas.find();
    console.log(tarea);
    res.json(tarea);
});

router.post('/', async(req, res) =>{

    const {titulo, autor, descripcion, prioridad, estado} = req.body;
    const tarea = new Tareas({titulo, autor, descripcion, prioridad, estado}); //  esto crea una nueva tarea
    console.log(tarea); 
    await tarea.save(); //  esto guarda los datos en la bd, pero de manera asíncrona
    res.json({status:'Tarea guardada'});
});

router.put('/:id', async(req, res) =>{
    const {title, descripcion} = req.body;
    const nuevaTareas = {titulo, autor, descripcion, prioridad, estado};
    await Tareas.findByIdAndUpdate(req.params.id, nuevaTareas);
    console.log(req.params.id);
    res.json({status:'Tarea actualizada'});
}); 


router.delete('/:id', async(req, res)=>{
    await Tareas.findByIdAndRemove(req.params.id);
    res.json({status:'Tarea eliminada...'});
});




module.exports = router;