const express = require("express");
const fs = require("fs");
const app = express();
const todo_list = require("./MOCK_DATA.json");
const path = require("path");

//Middleware - plugin
app.use(express.json()); //Middle ware 1 used for parsing JSON data

//Routes

app.get("/todos", (req, res) => {
  res.json(todo_list);
});

//Rest api

app.get("/api/todos", (req, res) => {
  res.json(todo_list);
});

app.use(express.urlencoded({ extended: false })); //Middle ware 2 used for parsing url-encoded datato view body

app
  .route("/api/todos/:id")

  .get((req, res) => {
    const id = Number(req.params.id);
    const todo = todo_list.find((todo) => todo.id === id);
    if (!todo)
      return res.status(404).json({ msg: `Todo with id : ${id} not found` });
    return res.json(todo);
  })

  .patch((req, res) => {
    const id = Number(req.params.id);
    const changes = req.body;
    const todoIdx = todo_list.findIndex((todo) => todo.id === id);
    if (todoIdx >= 0) {
      const updatedTodo = { ...todo_list[todoIdx], ...changes };
      updatedTodo.id = id;
      todo_list[todoIdx] = updatedTodo;
      fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(todo_list),
        (err, data) => {
          return res.json({
            status: "Success",
            updatedTodo,
          });
        }
      );
    } else {
      return res.status(404).json({
        status: "Error",
        message: "ID not found",
      });
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const todoIdx = todo_list.findIndex((todo) => todo.id === id);
    if (todoIdx >= 0) {
      const delTodo = todo_list.splice(todoIdx, 1)[0];
      fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(todo_list),
        (err, data) => {
          return res.json({
            status: "Success"
          }).send(req.params.id);
        }
      );
    } else {
      return res.status(404).json({
        status: "Error",
        message: "Todo not found",
      });
    }
  });

  app.post("/api/todos", (req, res) => {
    const body = req.body;
    if (!body.title || !body.description) {
      res.status(404).json({ msg: `All the fields are required` });
      return; // Return to avoid further execution
    }
  
    fs.readFile("./MOCK_DATA.json", "utf-8", (err, data) => {
      if (err) {
        return res.json({
          id: err,
          status: "Failed to read file",
        });
      }
  
      const todos = JSON.parse(data);
      todos.push({ id: todos.length + 1, ...body });
  
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(todos), (err) => {
        if (err) {
          return res.json({
            id: err,
            status: "Failed to write file",
          });
        }
  
        const newTodo = todos[todos.length - 1];
  
        return res.json({
          id: newTodo.id,
          title: newTodo.title,
          description: newTodo.description,
          status: "Success",
        });
      });
    });
  });
  

//Connecting frontend to backend -- solving the CORS error

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

/*
If you want to copy path from the html file and execute it then

use


cosnt cors=require("cors")
app.use(cors())
*/

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
