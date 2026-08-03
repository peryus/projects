import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import styles from './TodoForm.module.css'

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const normalizedTitle = title.trim()

    if (!normalizedTitle) {
      return
    }

    onAddTodo(normalizedTitle)
    setTitle('')
  }

  return (
      <form
          className={styles.form}
          onSubmit={handleSubmit}
      >
        <input
            className={styles.input}
            type="text"
            placeholder="Enter a new todo"
            value={title}
            onChange={(event) =>
                setTitle(event.target.value)
            }
        />

        <button
            className={styles.addButton}
            type="submit"
        >
          <FaPlus />
          Add
        </button>
      </form>
  )
}

export default TodoForm