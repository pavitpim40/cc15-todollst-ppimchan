import styles from './TodoCreate.module.scss';
import { FaPlus } from 'react-icons/fa';
function TodoCreate() {
  return (
    <div className={styles.todo__create}>
      <div className={styles.todo__create__button}>
        <FaPlus />
      </div>
      <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>
  );
}

export default TodoCreate;
