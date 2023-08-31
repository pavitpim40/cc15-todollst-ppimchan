import TodoItem from './TodoItem';
import styles from './TodoLists.module.scss';

function TodoLists() {
  return (
    <ul className={styles.todo__lists}>
      <TodoItem task='DoHW' done={true} date='31 Aug' />
      <TodoItem task='Drink' done={false} date='1 Sep' />
    </ul>
  );
}

export default TodoLists;
