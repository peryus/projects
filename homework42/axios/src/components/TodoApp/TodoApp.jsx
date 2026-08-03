import { useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { getTodosFromServer } from '../../api/todosAdapter'
import TodoForm from '../TodoForm/TodoForm'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoApp.module.css'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [userId, setUserId] = useState('')
  const [activeUserId, setActiveUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLoadTodos = async (event) => {
    event.preventDefault()

    const normalizedUserId = Number(userId)

    if (
        !Number.isInteger(normalizedUserId) ||
        normalizedUserId < 1 ||
        normalizedUserId > 10
    ) {
      setError('Enter a user ID from 1 to 10')
      return
    }

    try {
      setIsLoading(true)
      setError('')

      const loadedTodos =
          await getTodosFromServer(normalizedUserId)

      setTodos(loadedTodos)
      setActiveUserId(normalizedUserId)
    } catch (error) {
      console.error(error)

      setTodos([])
      setError('Failed to load todos')
    } finally {
      setIsLoading(false)
    }
  }

  const addTodo = (title) => {
    const newId = new Date().getTime()

    const newTodo = {
      userId: activeUserId,
      id: newId,
      title,
      completed: false,
    }

    setTodos((currentTodos) => [
      newTodo,
      ...currentTodos,
    ])
  }

  const toggleTodo = (todoId) => {
    setTodos((currentTodos) =>
        currentTodos.map((todo) =>
            todo.id === todoId
                ? {
                  ...todo,
                  completed: !todo.completed,
                }
                : todo,
        ),
    )
  }

  const deleteTodo = (todoId) => {
    setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== todoId),
    )
  }

  return (
      <main className={styles.page}>
        <section className={styles.todoApp}>
          <h1 className={styles.title}>Todo List</h1>

          <form
              className={styles.userForm}
              onSubmit={handleLoadTodos}
          >
            <input
                className={styles.userInput}
                type="number"
                min="1"
                max="10"
                placeholder="Enter user ID"
                value={userId}
                onChange={(event) => {
                  setUserId(event.target.value)
                  setError('')
                }}
            />

            <button
                className={styles.loadButton}
                type="submit"
                disabled={isLoading}
            >
              <FaDownload />

              {isLoading ? 'Loading...' : 'Load Todos'}
            </button>
          </form>

          {error && (
              <p className={styles.error}>{error}</p>
          )}

          {activeUserId && (
              <p className={styles.userInfo}>
                Current user: {activeUserId}
              </p>
          )}

          <TodoForm onAddTodo={addTodo} />

          {!isLoading && todos.length === 0 && (
              <p className={styles.emptyMessage}>
                No todos yet
              </p>
          )}

          <ul className={styles.todoList}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={toggleTodo}
                    onDeleteTodo={deleteTodo}
                />
            ))}
          </ul>
        </section>
      </main>
  )
}

export default TodoApp