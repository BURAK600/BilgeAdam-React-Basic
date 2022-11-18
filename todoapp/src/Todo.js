import React from "react";
import { useState } from "react";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState();
  const [date, setDate] = useState();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const addTodo = (e) => {
    setTodos([
      ...todos,
      {
        content: content,
        date: date,
      },
    ]);
  };

  return (
    <div className="w-full h-full container flex-col justify-center items-center">
      <h1 className="text-center text-slate-500 font-bold"> Todo App</h1>
      <div>
        <form className="row flex-col mx-auto justify-center w-50 mt-5">
          <input
            type="text"
            id="content"
            name="contet"
            placeholder="Lütfen Bir Todo Giriniz"
            className="w-50 rounded-md border px-2 my-3 "
            onChange={onChangeContent}
          ></input>
          <input
            type="date"
            id="date"
            name="date"
            className="w-auto border rounded-md"
            onChange={onChangeDate}
          ></input>

          <button
            type="button"
            className="hover:bg-blue-800 w-50 m-auto mt-4 p-1 
          rounded font-medium cursor-pointer bg-blue-600 text-white"
            onClick={addTodo}
          >
            Todo ekle
          </button>
        </form>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Todo</th>
              <th scope="col">Tarih</th>
              <th scope="col">Durum</th>
              <th scope="col" className="text-center">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.content}</td>
                  <td>{data.date}</td>
                  <td>false</td>
                  <td className="flex justify-center">
                    <div className="text-center">
                      <button className="btn btn-danger w-20 mx-1">Sil</button>
                      <button className="btn btn-warning w-20 ">Düzenle</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;