import {
  ADD_TODO,
  CLOSE_MODAL,
  DELETE_TODO,
  FETCH_TODOS,
  SHOW_MODAL,
  TOGGLE_TODO,
} from './actionTypes'

export function addTodo(todo) {
  return async (dispatch) => {
    let data

    try {
      const response = await fetch(
        'https://my-todo-app-6e47f-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
        {
          method: 'post',
          body: JSON.stringify(todo),
        }
      )

      data = await response.json()
    } catch (e) {
      console.log(e)
    }

    todo.id = data.name

    dispatch({
      type: ADD_TODO,
      todo: todo,
    })
  }
}

export function fetchTodos() {
  return async (dispatch) => {
    const todos = []

    try {
      const response = await fetch(
        'https://my-todo-app-6e47f-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
      )

      const data = await response.json()

      if (data) {
        Object.keys(data).forEach((key) => {
          todos.push({
            id: key,
            ...data[key],
          })
        })
      }
    } catch (e) {
      console.log(e)
    }

    dispatch({
      type: FETCH_TODOS,
      todos: todos.reverse(),
    })
  }
}

export function deleteTodo(id) {
  return async (dispatch, getState) => {
    const todos = getState().todos

    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    dispatch({
      type: DELETE_TODO,
      todos: newTodos,
    })
    try {
      await fetch(
        `https://my-todo-app-6e47f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
        {
          method: 'delete',
        }
      )
    } catch (e) {
      console.log(e)
    }
  }
}

export function toggleTodo(id) {
  return async (dispatch, getState) => {
    const todos = [...getState().todos]
    const todo = todos.find((todo) => todo.id === id)
    todo.complited = !todo.complited

    dispatch({
      type: TOGGLE_TODO,
      todos: todos,
    })

    try {
      await fetch(
        `https://my-todo-app-6e47f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
        {
          method: 'put',
          body: JSON.stringify(todo),
        }
      )
    } catch (e) {
      console.log(e)
    }
  }
}

export function showModal(id) {
  return {
    type: SHOW_MODAL,
    activeId: id,
  }
}
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}
