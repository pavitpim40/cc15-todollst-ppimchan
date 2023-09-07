// Dependencies
import { useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoContextProvider from '../context/TodoContext';
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import useTodo from '../hooks/useTodo';

function App() {
  const { addTodo, allTodos, deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate addTodo={addTodo} />
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;
