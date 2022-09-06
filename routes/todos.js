const express = require('express');
const router = express.Router();
const config = require('config');
const mysql = require('mysql');

//connect to mysql server
let conn = mysql.createConnection({
    host:config.get("host"),
    user:config.get("user"),
    password:config.get("password"),
    database:config.get("database"),
})

conn.connect((err) => {
    if(err){
        throw err;
    }else{
        console.log('[connect is successfully]');
    }
})

//CRUD 

//get 
router.get('/todo', (req,res, next) => {
    conn.query('select * from todolist', (err, result) => {
        if(err){
            res.status(500).json({'message':'server error'});
        }else{
            res.status(200).json(result);
        }
    })
})
//Post
router.post('/todo',(req,res,next)=>{
    const newTodo = req.body;
    conn.query(`insert into todolist set title= "${newTodo.title}", status='unfinish'`,(err,result) =>{
        if(err){
            res.status(400).json({message:'Insert error, please check data'})
        }else{
            res.status(201).json({message:'Insert successfully'})
        }
    })
})
//Patch 
router.patch('/todo/:id',(req,res,next) => {
    const todoId = req.params.id;
    const updateList = req.body;
    conn.query(`update todolist set status="${updateList.status}" where id=${todoId}`,(err,result) =>{
        if(err){
            res.status(400).json({message:'update failed'});
        }else{
            res.status(200).json({message:'update successfully'});
        }
    })
})
//Delete
router.delete('/todo/:id',(req,res,next) => {
    const todoId = req.params.id;
    conn.query(`Delete from todolist where id="${todoId}"`,(err, result) =>{
        if(err){
            res.status(400).json({message:'delete failed'})
        }else{
            res.status(204).json({message:'delete successfully'})        
        }
    })
})

module.exports = router;