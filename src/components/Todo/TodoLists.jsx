import TodoItem from './TodoItem';
import styles from './TodoLists.module.scss';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

function TodoLists() {
  const { allTodos } = useContext(TodoContext);

  return (
    <ul className={styles.todo__lists}>
      {allTodos.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          id={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
