// import React from 'react'
// // import Header from './components/Header';
// // import {BrowserRouter , Routes,Route} from "react-router-dom";
// // import Home from "./components/Home";
// // import Cart from "./components/Cart";
// const App = () => {
//   return (
//     <div className="app">
//       {/* <BrowserRouter>
//       <Header/>
//       <Routes>
//       <Route  extact path="/" element={ <Home/>}/>
//       <Route   path="/cart" element={ <Cart/>}/>
//         </Routes>
//       </BrowserRouter> */}
//     </div>
//   )
// }

// export default App

import React,{ useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import Item from './Item'

function App() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");


  const getToDo=()=>{
    axios.get("http://localhost:8080/api/tasks/get-todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getToDo()
  },[])

  const addUpdateTodo = () => {

    if (isUpdating === "") {
      axios.post("http://localhost:8080/api/tasks/save-todo", { task })
        .then((res) => {
          console.log(res.data);
          setTask("");
          getToDo()
        })
        .catch((err) => console.log(err));
    }else{
      axios.post("http://localhost:8080/api/tasks/update-todo", { _id: isUpdating, task })
        .then((res) => {
          console.log(res.data);
          setTask("");
          setUpdating("");
          getToDo()
        })
        .catch((err) => console.log(err));
    }
  }

  const deleteTodo = (_id) => {
    axios.delete(`http://localhost:8080/api/tasks/delete-todo/${_id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      getToDo()
  }

  const updateTodo = (_id, task) => {
    setUpdating(_id);
    setTask(task);
  }

  console.log(todo,"todo")
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder='Write Something...'
            value={task}
            onChange={(e) => setTask(e.target.value)} />
          <div className="add"
            onClick={addUpdateTodo}>{isUpdating ? "Update" : "Add"}</div>
        </div>

        <div className="list">
          {todo.task && todo.task.map(item => <Item
            key={item._id}
            text={item.task}
            remove={() => deleteTodo(item._id)}
            update={() => updateTodo(item._id, item.task)} />
          
            )}
      </div>

      </div>
    </div>
  );
}

export default App;