import { useState } from 'react';
import dayjs from 'dayjs';

const END_POINT = 'http://localhost:8080/api/todos';

function useTodo() {
  // DATA
  const [allTodos, setAllTodos] = useState([]);

  // #1 : Create
  const addTodo = async function (taskName) {
    console.log('add', taskName);
    const newTodo = {
      task: taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    };

    try {
      // SEND REQUEST : POST
      // WAIT RESPONSE
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      };
      let response = await fetch(END_POINT, options);
      let data = await response.json();
      const createdTodo = { ...data.todo, due_date: data.todo.date };
      delete createdTodo.date;

      // Update STATE
      setAllTodos((p) => [createdTodo, ...p]);
    } catch (error) {
      console.log(error);
    }
  };

  // #2 : Read
  const fetchAllTodo = async () => {
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
  };

  // #3 : Update
  const editTodo = async function (todoId, updateTodoObj) {
    try {
      // FindTodo
      let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if (foundedIndex !== -1) {
        // updateTodo
        const updatedTodo = { ...allTodos[foundedIndex], ...updateTodoObj };
        updatedTodo.date = updatedTodo.due_date;
        const options = {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        };

        const response = await fetch(`${END_POINT}/${todoId}`, options);
        const data = await response.json();

        // UpdateState
        const newTodoLists = [...allTodos];
        newTodoLists[foundedIndex] = { ...data.todo, due_date: data.todo.date };
        setAllTodos(newTodoLists);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // #4 : Delete
  const deleteTodo = async function (todoId) {
    try {
      const options = { method: 'DELETE' };
      let response = await fetch(`${END_POINT}/${todoId}`, options);
      if (response.status === 204) {
        setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { allTodos, addTodo, fetchAllTodo, editTodo, deleteTodo };
}

export default useTodo;
