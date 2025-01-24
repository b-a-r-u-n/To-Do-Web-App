import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleComplete, updateTodo } from '../../features/todo/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const isEditable = useSelector((state) => state.isEditable);
  const dispatch = useDispatch();
  return (
    <>
      {
        todos.map((todo) => {
          return (
                  <div key={todo.id}
              className={`w-1/2 mx-auto h-12 ${todo.completed ? "bg-green-200" : "bg-pink-200"} mt-10 rounded-lg flex items-center`}
            >
              <input 
                type="checkbox" 
                name="" 
                id=""
                className='w-[8%]'
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
              />
              <h1
                className={`w-[76%] font-bold text-black text-lg ${todo.completed ? "line-through" : ""}`}
              >
                {todo.title}
              </h1>
              <button
                className={`w-[8%] text-xl ${todo.completed ? "cursor-not-allowed" : "cursor-pointer"} ${isEditable ? "opacity-25" : "opacity-100"}`}
                onClick={() => dispatch(dispatch(updateTodo({ id: todo.id, title: todo.title })))}
                disabled={todo.completed}
              >
                ✏️
              </button>
              <button
                className='w-[8%] text-xl cursor-pointer'
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                ❌
              </button>
            </div>
          )
        })
      }
    </>
  )
}

export default TodoList
