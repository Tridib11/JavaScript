const express=require('express')
const bodyParser=require('body-parser')
const fs=require('fs')
const path=require('path')
// const cors=require("cors")
const app=express()





app.use(bodyParser.json())
// app.use(cors())
function findIndex(arr,id){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==id) return i;
    }
    return -1;
}

function removeAtIndex(arr,index){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(i!==index) newArray.push(arr[i])
    }
return newArray
}


app.get('/todos',(req,res)=>{
    fs.readFile('todo.json','utf-8',(err,data)=>{
        if(err) throw err
        res.json(JSON.parse(data))
    })
})


app.post('/todos',(req,res)=>{
    const newTodo={
        id:Math.floor(Math.random()*100000),
        title:req.body.title,
        description:req.body.description
    }
    fs.readFile('todo.json','utf-8',(err,data)=>{
        if(err) throw err
        const todos=JSON.parse(data)
        todos.push(newTodo)
        fs.writeFile('todo.json',JSON.stringify(todos),(err)=>{
            if(err) throw err
            res.status(201).json(newTodo)
        })
    })
})


app.delete('/todos/:id',(req,res)=>{
    fs.readFile('todo.json','utf-8',(err,data)=>{
        if (err) throw err
        let todos=JSON.parse(data)
        const todoIndex=findIndex(todos,parseInt(req.params.id))
        if(todoIndex===-1){
            res.status(404).send()
        }
        else{
            todos=removeAtIndex(todos,todoIndex)
            fs.writeFile('todo.json',JSON.stringify(todos),(err)=>{
                if (err) throw err
                res.status(200).send()
            })
        }
    })
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(3001)
