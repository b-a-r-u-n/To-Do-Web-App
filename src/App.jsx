import { TodoForm, TodoList } from './components'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
      <div
        className='bg-gray-900 text-white h-screen pt-10 flex flex-col items-center'
      >
        <div
          className='w-full h-[20%]'
        >
          <h1
            className='text-4xl font-bold mb-10 text-center'
          >
            Stay Organized: Your Personal To-Do List
          </h1>
          <TodoForm />
        </div>
        <div
          className='w-full h-[80%] overflow-y-scroll scrollbar-hide'
        >
          <TodoList />
        </div>
      </div>
    </Provider>
  )
}

export default App
