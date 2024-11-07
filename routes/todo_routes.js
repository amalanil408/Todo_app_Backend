const express = require('express');
const router = express.Router();
const Todo = require('../models/model');

router.post("/todos",async (req,res) => {
    try{
        const todo = new Todo({
            title : req.body.title,
            description : req.body.description
        });
        await todo.save();
        res.status(200).send(todo);
    } catch(error){
        res.status(400).send(error)
    }
});

router.get("/todos",async (req,res) => {
    try{
        const todo = await Todo.find();
        res.send(todo);
    } catch(error) {
        res.status(400).send(error)
    }
});

router.delete("/todos/:id", async (req,res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo) return res.status(400).send({error : "todo not found"});
        res.status(200).json({message : "todo deleted successfully"})
    } catch(error){
        res.status(400).send(error)
    }
});

router.put("/todos/:id",async (req,res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id , req.body , {new : true})
        if(!todo) return res.status(400).send({error : "todo not found"});
        res.status(200).json(todo);
    } catch(error){
        res.status(400).send(error)
    }
})

module.exports = router;