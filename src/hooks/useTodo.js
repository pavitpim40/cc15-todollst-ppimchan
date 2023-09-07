import { useState } from 'react';

function useTodo() {
  const [allTodos, setAllTodos] = useState([]);

  async function fetchAllTodo() {
    try {
      let response = await fetch('http://localhost:8080/api/todos', { method: 'GET' });
      let todoData = await response.json();

      const newTodoLists = todoData.todos.map((todo) => {
        const newTodo = { ...todo, due_date: todo.date };
        delete todo.date;
        return newTodo;
      });
      setAllTodos(newTodoLists);
    } catch (error) {
      console.log(error);
    }
  }

  return { value: 5, allTodos, setAllTodos, fetchAllTodo };
}

export default useTodo;
