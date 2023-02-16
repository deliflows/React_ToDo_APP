const express = require('express');
const app = express();
const portNumber = 3005;
const Sequelize = require('sequelize');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const { thetodo } = require('./models');
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)
app.listen(portNumber, function(req, res){
    console.log(`listening on port ${portNumber}`);
})
app.get('/api/todo', async function(req, res){
    let results = await thetodo.findAll();
    res.json({results});
})
app.post('/api/create', async function(req, res){
    const {taskname, complete, priority} = req.body;
    let results = await thetodo.create({
        taskname: taskname,
        complete: complete,
        priority: priority,
        createdAte: new Date(),
        updatedAt: new Date()
    })
    res.json({results});
})
app.get('/api/delete/:id', async function(req, res){
    const { id } = req.params;
    let results = await thetodo.destroy({
        where:{
            id
        }
    })
    res.json({results});
})
app.post('/api/edit/:id', async function(req, res){
    const { id } = req.params;
    const {taskname, priority} = req.body;
    let results = await thetodo.update({
        taskname: taskname,
        priority: priority,
        updatedAt: new Date()
    },{
        where:{
            id
        }
    })
    res.json({results})
})