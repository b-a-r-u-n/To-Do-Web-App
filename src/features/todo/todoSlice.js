import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    message: "",
    isEditable: false
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        /* The `addTodo` function in the code snippet is a reducer function defined using Redux
        Toolkit's `createSlice` method. It takes two parameters, `state` and `action`, and is
        responsible for adding a new todo item to the list of todos in the application state. */
        addTodo: (state, action) => {
            if(!action.payload.trim())
                return;
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.todos.push(todo);
        },

        /* The `removeTodo` function in the code snippet is a reducer function defined using Redux
        Toolkit's `createSlice` method. It takes two parameters, `state` and `action`, and is
        responsible for removing a todo item from the list of todos in the application state based
        on the `id` provided in the `action.payload`. */
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },

        /* The `toggleComplete` function is a reducer function defined using Redux Toolkit's
        `createSlice` method. It takes two parameters, `state` and `action`, and is responsible for
        toggling the `completed` status of a todo item in the list of todos in the application state
        based on the `id` provided in the `action.payload`. */
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        },

        /* The `updateTodo` function is a reducer function defined using Redux Toolkit's `createSlice`
        method. It takes two parameters, `state` and `action`, and is responsible for updating a
        todo item in the list of todos in the application state based on the `id` and `title`
        provided in the `action.payload`. */
        updateTodo: (state, action) => {
            const {id, title} = action.payload;
            state.isEditable = true;
            state.message = title;
            state.todos = state.todos.map((todo) => {
                if(todo.id == id)
                    todo.title = title;
                return todo;
            })
        },
        
        /* The `saveAfterUpdate` function is a reducer function defined using Redux Toolkit's
        `createSlice` method. It takes two parameters, `state` and `action`, and is responsible for
        updating the state after a todo item has been edited and saved. */
        saveAfterUpdate: (state, action) => {
            state.isEditable = false;
            state.message = "";
        }
    }
})

export const {addTodo, removeTodo, toggleComplete, updateTodo, saveAfterUpdate} = todoSlice.actions;

export default todoSlice.reducer;