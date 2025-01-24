import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, saveAfterUpdate, updateTodo } from '../../features/todo/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const isEditable = useSelector((state) => state.isEditable);
  const message = useSelector((state) => state.message);
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = React.useState('');
  const [id, setId] = React.useState('');

  /**
   * The function `handleSubmit` prevents the default form submission behavior, updates or adds a todo
   * item based on a condition, and resets the input field.
   */
  const handaleSubmit = (e) => {
    e.preventDefault();
    if(isEditable){
      dispatch(updateTodo({id:id, title:input}));
      dispatch(saveAfterUpdate());
    }
    else
      dispatch(addTodo(input))
    setInput('');
  }

  /* The `useEffect` hook in the code snippet is being used to update the local state (`input` and
  `id`) based on changes to the `isEditable` state. */
  useEffect(() => {
    if(isEditable){
      setInput(message);
      const todo = todos.find((todo) => todo.title === message);
      setId(todo?.id);
    }
  }, [isEditable])

  return (
    <>
      <form
        onSubmit={handaleSubmit}
        className='w-1/2 mx-auto h-10 flex'
      >
        <input 
            type="text" 
            name="" 
            id=""
            value={input}
            placeholder='✍️ Add a new task...'
            onChange={(e) => setInput(e.target.value)}
            className='w-[90%] bg-gray-200 h-[100%] rounded-l-lg text-black px-2 text-xl font-semibold border-none outline-none'  
        />
        <button
            type='submit'
            className='w-[10%] bg-blue-500 h-[100%] text-lg font-bold rounded-r-lg cursor-pointer'
        >
            {
                isEditable ? "Update" : "Add"
            }
        </button>
      </form>
    </>
  )
}

export default TodoForm
