import styles from './TodoLists.module.scss';
import { FaTrashAlt, FaPen, FaRegCircle } from 'react-icons/fa';

function TodoLists() {
  return (
    <ul className={styles.todo__lists}>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}>{/* <FaRegCircle /> */}</span>
        <p className={styles.todo__task}>todo-item 1 </p>
        <span className={styles.todo__date}>30 Aug</span>
        <div className={styles.todo__action}>
          <span>
            <FaPen className={styles.todo__edit} />
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoLists;
