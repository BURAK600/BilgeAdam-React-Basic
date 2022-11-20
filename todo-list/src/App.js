
import './App.css';
import React, { useState, useEffect } from 'react'

import { ReactComponent as DeleteIcon } from './assets/DeleteIcon.svg'
import { ReactComponent as SaveIcon } from './assets/SaveIcon.svg'
import { ReactComponent as EditIcon } from './assets/EditIcon.svg'

import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("");

  const [edittodo, setEdittodo] = useState("");


  const [todoList, setTodoList] = useState([]);



  const changeTodo = (evt) => {

    setTodo(evt.target.value)

  }

  const addTodo = () => {
    if (todo !== "")
      setTodoList(prevTodoList => [...prevTodoList, { id: uuidv4(), todo, isEditable: false, isCompleted: false }]);
    setTodo("");
  }

  const completeTodo = (id) => {


    setTodoList(prevTodoList => prevTodoList.map(todoItem => todoItem.id === id ? { ...todoItem, isCompleted: !todoItem.isCompleted } : todoItem))
  }

  const editTodo = (id) => {

    setTodoList(prevTodoList => prevTodoList.map(todoItem => todoItem.id === id ? { ...todoItem, isEditable: !todoItem.isEditable } : todoItem))

  }

  const deleteTodo = (id) => {

    setTodoList(prevTodoList => prevTodoList.filter(todoItem => todoItem.id !== id ))

  }




  return (
    <>
      <div className='container-fluid text-center'>
        <h1>MY APPLICATION</h1>
      </div>
      <div className="container mt-5">

        <div className="row mt-5"></div>


        <div className="row text-center mt-5">

          <div className="d-flex flex-column justify-content-center align-items-center">

            <h1 className="mb-3">Todo List</h1>

            <div className="d-flex w-75 ">
              <input onChange={changeTodo} value={todo} type="text" className="form-control me-5" placeholder="Todo List" />

              <button onClick={addTodo} className=" btn bg-danger" >Add Todo</button>
            </div>
          </div>



          <div className='row mt-5' >

            {
              todoList.map(

                (todoItem) => <div className='d-flex'

                  key={todoItem.id}>
                  <div className='w-50'>
                    <input className='me-3' type="checkbox" value={todoItem.isCompleted}

                      onChange={() => completeTodo(todoItem.id)}

                    />
                    <label className={`${todoItem.isCompleted ? 'text-decoration-line-through' : ''} fw-bold`}>{todoItem.todo}</label>
                    {
                      !todoItem.isEditable ?
                        <label className={`${todoItem.isCompleted ? 'text-decoration-line-through' : ''} fw-bold`}>{todoItem.todo}</label>

                        :
                        <input onChange={changeTodo} value={todoItem.todo} placeholder="Todo List" />



                    }
                  </div>

                  <div>
                    {
                      !todoItem.isEditable ?
                        <EditIcon className='me-3' width={25} height={25} onClick={() => editTodo(todoItem.id)} style={{ cursor: 'pointer' }} />

                        : <SaveIcon className='me-3' width={25} height={25} style={{ cursor: 'pointer' }} />

                    }
                    <DeleteIcon className='me-3' width={25} height={25} style={{ cursor: 'pointer' }} onClick = {() => deleteTodo(todoItem.id)} />


                  </div>
                </div>

              )
            }

          </div>



        </div>

      </div>

    </>
  );
}

export default App;
