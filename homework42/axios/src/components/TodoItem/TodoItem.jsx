import {
  FaCheck,
  FaTrash,
  FaUndo,
} from 'react-icons/fa'
import styles from './TodoItem.module.css'

function TodoItem({
                    todo,
                    onToggleTodo,
                    onDeleteTodo,
                  }) {
  return (
      <li
          className={`${styles.todoItem} ${
              todo.completed ? styles.completed : ''
          }`}
      >
      <span className={styles.todoTitle}>
        {todo.title}
      </span>

        <div className={styles.actions}>
          <button
              className={styles.toggleButton}
              type="button"
              onClick={() => onToggleTodo(todo.id)}
          >
            {todo.completed ? <FaUndo /> : <FaCheck />}

            {todo.completed ? 'Undo' : 'Do'}
          </button>

          <button
              className={styles.deleteButton}
              type="button"
              onClick={() => onDeleteTodo(todo.id)}
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </li>
  )
}

export default TodoItem