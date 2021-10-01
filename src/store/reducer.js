import {
  ADD_TODO,
  CLOSE_MODAL,
  DELETE_TODO,
  FETCH_TODOS,
  SHOW_MODAL,
  TOGGLE_TODO,
} from './actionTypes'

const initialState = {
  todos: [],
  loading: true,
  showModal: false,
  activeId: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.todo, ...state.todos],
      }
    case FETCH_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: action.todos,
        showModal: false,
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: action.todos,
      }
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        activeId: action.activeId,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        activeId: null,
      }

    default:
      return state
  }
}
